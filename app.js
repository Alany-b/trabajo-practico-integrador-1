import { startDB } from "./src/config/database.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();


const app = express();
const PORT = process.env.PORT; ;

startDB().then(() => {
    app.listen(PORT, () => {
        console.log(   
            `✅Conexión con la base de datos establecida en  http://localhost:${PORT} ` );
    });
});