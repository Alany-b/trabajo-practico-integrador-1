import { Router } from "express";
import {
 register, 
 login, 
 profile, 
 updateProfile, 
 logout
} from "../controllers/auth.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";

export const authRoutes = Router();

authRoutes.get("/profile", profile);

authRoutes.put("/register", updateProfile);

authRoutes.post("/logout", logout);

// rutas publica

authRoutes.post("/register", register);
authRoutes.post("/login", login);

export default authRoutes;