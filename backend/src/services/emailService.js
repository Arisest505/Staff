const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // ❌ No usar SSL/TLS en puerto 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

exports.sendResetEmail = async (email, code) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM, // 📌 Email que envía el mensaje
      to: email,
      subject: "Código de Verificación - Restablecimiento de Contraseña",
      text: `Tu código de verificación es: ${code}`,
    });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    throw new Error("Error enviando el correo");
  }
};
