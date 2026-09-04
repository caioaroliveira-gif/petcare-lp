import { estoqueService } from './../service/estoque.service.js';
import { Router, type Request, type Response } from "express";

export const estoque_router = Router()

estoque_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
        estoqueService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})
