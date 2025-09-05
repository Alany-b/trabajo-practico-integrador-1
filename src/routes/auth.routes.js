import { Router } from "express";
import {
  profile,
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/auth.controller.js";
import {
  createRegisterValidation,
  updateProfileValidation,
} from "../middlewares/validations/auth.validation.js";

import applyValidations from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { dataValidada } from "../middlewares/matched.data.middleware.js";

export const authRoutes = Router();

authRoutes.post(
  "/auth/register",
  createRegisterValidation,
  applyValidations,
  dataValidada,
  register
);

authRoutes.post("/auth/login", login);

authRoutes.post("/auth/logout", logout);

authRoutes.get("/auth/profile", authMiddleware, profile);

authRoutes.put(
  "/auth/profile",
  authMiddleware,
  updateProfileValidation,
  applyValidations,
  dataValidada,
  updateProfile
);

export default authRoutes;