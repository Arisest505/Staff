const express = require("express");
const { register, login, forgotPassword, resetPassword, googleAuth } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/google", googleAuth); // ✅ RUTA DE GOOGLE LOGIN

module.exports = router;
