import { Router } from "express";
import {
  createArticle,
  getAllArticles,
  getByPkArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article.controller.js";

import {
  createArticleValidation,
  getArticleByPkValidation,
  updateArticleValidation,
  deleteArticleValidation,
} from "../middlewares/validations/article.validation.js";

import applyValidations from "../middlewares/validator.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { dataValidada } from "../middlewares/matched.data.middleware.js";

const articleRouter = Router();

// Crear artículo → necesita usuario autenticado
articleRouter.post(
  "/articles",
  authMiddleware,
  createArticleValidation,
  applyValidations,
  dataValidada,
  createArticle
);

// Listar todos los artículos → público
articleRouter.get("/articles", getAllArticles);

// Obtener artículo por ID → público
articleRouter.get(
  "/articles/:id",
  getArticleByPkValidation,
  applyValidations,
  getByPkArticle
);

// Actualizar artículo → solo autenticado (y en tu caso podemos meter después ownerMiddleware o adminMiddleware)
articleRouter.put(
  "/articles/:id",
  authMiddleware,
  updateArticleValidation,
  applyValidations,
  dataValidada,
  updateArticle
);

// Eliminar artículo → solo admin (o podríamos poner ownerMiddleware + admin)
articleRouter.delete(
  "/articles/:id",
  authMiddleware,
  adminMiddleware,
  deleteArticleValidation,
  applyValidations,
  deleteArticle
);

export default articleRouter;
