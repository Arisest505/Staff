const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

router.post("/", async (req, res) => {
  const { nombre, email, password } = req.body;
  const nuevoUsuario = await prisma.usuario.create({
    data: { nombre, email, password },
  });
  res.status(201).json(nuevoUsuario);
});

module.exports = router;
