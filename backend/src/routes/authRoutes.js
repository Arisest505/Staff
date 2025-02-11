const express = require("express");
const { register, login, logout, forgotPassword, resetPassword, googleAuth, getUserProfile, verifyCode, getToken } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/google", googleAuth);
router.get("/me", authMiddleware, getUserProfile);
router.get("/get-token", getToken); 
//  Agregar la ruta para verificar el código
router.post("/verify-code", verifyCode);

module.exports = router;
