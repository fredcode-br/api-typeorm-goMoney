import 'express-async-errors';
import express, { Application } from "express";
import { AppDataSource } from "./data-source";
import { routes } from "./routes";  

AppDataSource.initialize().then(() => {
    const app: Application = express();  

    app.use(express.json());  
    app.use(routes);  

    app.listen(process.env.PORT, () => {
        console.log(`Servidor rodando na porta ${process.env.PORT}`);
    });
});
