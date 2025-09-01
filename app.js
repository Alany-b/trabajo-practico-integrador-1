import { startDB } from "./src/config/database.js";
import express from "express";


const app = express();
const PORT = process.env.PORT; ;

startDB().then(() => {
    app.listen(PORT, () => {
        console.log(   
            `✅ Conexión con la base de datos establecida en  http://localhost:${PORT} ` );
    });
});