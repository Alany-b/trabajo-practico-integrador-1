import { startDB } from "./src/config/database.js";
import express from "express";
import dotenv from "dotenv";
import { authRoutes } from "./src/routes/auth.routes.js";


dotenv.config();


const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);



const PORT = process.env.PORT; ;

startDB().then(() => {
    
    app.listen(PORT, () => {
        
        console.log(   
            `✅Conexión con la base de datos establecida en  http://localhost:${PORT} ` );
    });
    
});