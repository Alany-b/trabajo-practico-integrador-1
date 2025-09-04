import { startDB } from "./src/config/database.js";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";


// 
import  authRoutes  from "./src/routes/auth.routes.js";
import  userRoutes from "./src/routes/user.routes.js";
import  articleRoutes from "./src/routes/article.routes.js";
import  articleTagRoutes from "./src/routes/article.tag.routes.js";
import  tagRoutes from "./src/routes/tag.routes.js";

dotenv.config();




const app = express();
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api", authRoutes);
app.use("/api", userRoutes);
router.use("/tags", tagRoutes);
router.use("/articles", articleRoutes);
router.use("/", articleTagRoutes);

// Puerto



const PORT = process.env.PORT; ;

startDB().then(() => {
    
    app.listen(PORT, () => {
        
        console.log(   
            `✅Conexión con la base de datos establecida en  http://localhost:${PORT} ` );
    });
    
});