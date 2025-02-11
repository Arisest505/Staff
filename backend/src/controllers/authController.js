// controllers/authController.js
const { OAuth2Client } = require("google-auth-library");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { sendResetEmail } = require("../services/emailService");
const crypto = require("crypto"); // Para generar códigos aleatorios
const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Autenticación con Google
exports.googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: "No se recibió un token válido" });

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    if (!ticket) return res.status(400).json({ error: "Token inválido" });

    const payload = ticket.getPayload();
    if (!payload) return res.status(400).json({ error: "No se pudo obtener información del usuario" });

    const { email, name, picture } = payload;
    let user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.usuario.create({
        data: { nombre: name, email, password: "", avatar: picture },
      });
    }

    const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("authToken", authToken, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict" });
    res.json({ token: authToken, user });
  } catch (error) {
    console.error("Error en Google Login:", error);
    res.status(500).json({ error: "Error en la autenticación con Google" });
  }
};

// Registro de usuario
exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.usuario.create({ data: { nombre, email, password: hashedPassword } });
    res.json({ message: "Usuario registrado correctamente", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email y contraseña son obligatorios" });
    }

    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict"
    });

    res.json({ message: "Inicio de sesión exitoso", user });

  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      return res.status(404).json({ error: "No existe un usuario con este correo." });
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    const token = jwt.sign({ code: otpCode, email }, process.env.JWT_SECRET, { expiresIn: "30m" });

    await sendResetEmail(email, `Tu código de verificación es: ${otpCode}`);

    //  Guardar email y token en cookies seguras
    res.cookie("resetEmail", email, {
      httpOnly: true, 
      secure: false, //  Debe ser `false` en desarrollo
      sameSite: "strict",
      maxAge: 30 * 60 * 1000,
    });

    res.cookie("resetToken", token, {
      httpOnly: true, 
      secure: false,
      sameSite: "strict",
      maxAge: 30 * 60 * 1000,
    });


    res.json({ message: "Código enviado" });

  } catch (error) {
    res.status(500).json({ error: "Error en el servidor." });
  }
};


exports.resetPassword = async (req, res) => {
  
  const { newPassword } = req.body;
  const email = req.cookies.resetEmail; //  Obtener email desde la cookie

  if (!email) {
    console.error(" No se encontró un email válido en las cookies.");
    return res.status(400).json({ error: "No se encontró un email válido en las cookies." });
  }

  try {
    const user = await prisma.usuario.findUnique({ where: { email } });



    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    //  Hashear la nueva contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(newPassword, 10);


    //  Actualizar la contraseña en la base de datos
    const updatedUser = await prisma.usuario.update({
      where: { email },
      data: { password: hashedPassword },
    });


    //  Eliminar las cookies después de restablecer la contraseña
    res.clearCookie("resetEmail");
    res.clearCookie("resetToken");

    res.json({ message: "Contraseña actualizada correctamente." });

  } catch (error) {
    console.error(" Error en resetPassword:", error);
    res.status(500).json({ error: "Error en el servidor." });
  }
};

exports.verifyCode = async (req, res) => {


  const { code, token } = req.body;
  const email = req.cookies.resetEmail; //  Obtener email desde la cookie

  if (!email) {
    return res.status(400).json({ error: "No se encontró un email válido en las cookies." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);


    if (decoded.email !== email || decoded.code !== code) {
      return res.status(400).json({ error: "Código incorrecto o token inválido." });
    }

    res.json({ message: "Código válido, procede a restablecer la contraseña." });

  } catch (error) {
    console.error(" Error verificando código:", error);
    return res.status(400).json({ error: "Código expirado o inválido." });
  }
};

exports.getToken = async (req, res) => {
  const token = req.cookies.resetToken; //  Obtener el token desde la cookie

  if (!token) {
    return res.status(400).json({ error: "No se encontró un token válido." });
  }

  res.json({ token });
};

exports.getUserProfile = async (req, res) => {
  res.json(req.user); // Enviar datos del usuario autenticado
};

// Cerrar sesión (Logout)

exports.logout = async (req, res) => {
  try {
    res.cookie("authToken", "", { 
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(0) // Expira la cookie inmediatamente
    });

    res.json({ message: "Sesión cerrada correctamente." });
  } catch (error) {
    console.error("Error cerrando sesión:", error);
    res.status(500).json({ error: "Error en el servidor." });
  }
};
