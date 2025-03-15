import { Router, Request, Response, NextFunction } from "express";

// Tipos definidos para os métodos e o manipulador assíncrono
type Method = 'get' | 'post' | 'put' | 'delete';
type HandlerPromise = (req: Request, res: Response) => Promise<Response>;

const router = Router();

// Função de rota genérica
export function route(method: Method, path: string, handler: HandlerPromise): void {
    router[method](path, (req: Request, res: Response, next: NextFunction) => {
        handler(req, res).catch(next);  // Propaga o erro para o middleware de erro
    });
}

// Definindo uma rota base para a API
route('get', '/', async (req: Request, res: Response) => {
    return res.json({ message: "Bem-vindo à API goMoney" });
});

// Exportando o objeto de rotas
export const routes = router;
