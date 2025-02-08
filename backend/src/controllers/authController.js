const { OAuth2Client } = require("google-auth-library"); // ✅ Importar primero
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { sendResetEmail } = require("../services/emailService");

const prisma = new PrismaClient();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); // ✅ Ahora no dará error

// Función para manejar la autenticación con Google
exports.googleAuth = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: "No se recibió un token válido" });

    //  Verificar el token con Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    if (!ticket) return res.status(400).json({ error: "Token inválido" });

    const payload = ticket.getPayload();
    if (!payload) return res.status(400).json({ error: "No se pudo obtener información del usuario" });

    const { email, name, picture } = payload;

    //  Buscar al usuario en la base de datos o crearlo si no existe
    let user = await prisma.usuario.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.usuario.create({
        data: { nombre: name, email, password: "", avatar: picture },
      });
    }

    // Generar un token JWT para la sesión
    const authToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token: authToken, user });
  } catch (error) {
    console.error(" Error en Google Login:", error);
    res.status(500).json({ error: "Error en la autenticación con Google" });
  }
};
//Registrar Usuarios

exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.usuario.create({
      data: { nombre, email, password: hashedPassword }
    });

    res.json({ message: "Usuario registrado correctamente", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Login Usuarios
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.usuario.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Contraseña incorrecta" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};
//Recuperar Contraseña

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "15m" });
    await prisma.usuario.update({
      where: { email },
      data: { token }
    });

    await sendResetEmail(email, token);
    res.json({ message: "Correo de recuperación enviado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//Actualizar Contraseña

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.usuario.update({
      where: { email: decoded.email },
      data: { password: hashedPassword, token: null }
    });

    res.json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    res.status(400).json({ error: "Token inválido o expirado" });
  }
};


