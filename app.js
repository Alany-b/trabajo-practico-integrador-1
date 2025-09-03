import { startDB } from "./src/config/database.js";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  authRoutes  from "./src/routes/auth.routes.js";
import  userRoutes from "./src/routes/user.routes.js";
// import  personRoutes  from "./src/routes/person.routes.js";
// import  userRoutes from "./src/routes/user.routes.js";
// import  authRoutes  from "./src/routes/auth.routes.js";
// import  taskRoutes from "./src/routes/task.routes.js";


dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());

// Rutas
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Puerto



const PORT = process.env.PORT; ;

startDB().then(() => {
    
    app.listen(PORT, () => {
        
        console.log(   
            `✅Conexión con la base de datos establecida en  http://localhost:${PORT} ` );
    });
    
});