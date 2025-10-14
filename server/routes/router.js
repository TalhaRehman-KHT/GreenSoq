// routes/authRoutes.js
import express from "express";
import { loginUser, registerUser } from "../controller.js/authController.js";
import { favuriteAdd } from "../controller.js/Favurite.js";
import { verifyToken } from "../middlewares/authMiddleware.js";



const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.post("/fav", verifyToken, favuriteAdd);

export default router;
