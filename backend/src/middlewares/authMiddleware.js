const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.authToken; // Obtener token desde las cookies

    if (!token) {
      return res.status(401).json({ message: "No autorizado, token no encontrado" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verificar JWT
    const user = await prisma.usuario.findUnique({ where: { id: decoded.id } });

    if (!user) {
      return res.status(401).json({ message: "No autorizado, usuario no encontrado" });
    }

    req.user = user; // Guardar usuario en req.user
    next(); // Pasar al siguiente middleware o controlador
  } catch (error) {
    res.status(401).json({ message: "Token inválido o expirado" });
  }
};

module.exports = authMiddleware;
