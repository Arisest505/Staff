const nodemailer = require("nodemailer");

exports.sendResetEmail = async (email, token) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Recuperación de contraseña",
    text: `Haz clic en este enlace para restablecer tu contraseña: http://localhost:3000/reset/${token}`
  };

  await transporter.sendMail(mailOptions);
};
