import {type Request, type Response} from "express";
import type { CriarEstoque } from "../types/estoque.js";
import { estoqueService } from "../service/estoque.service.js";


class EstoqueController {

    async create(req: Request<CriarEstoque>, res: Response) {
        try {
            const estoque = await estoqueService.create(req.body)
            return res.json(estoque)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const estoques = await estoqueService.getAll()
            return res.json(estoques)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const estoque = await estoqueService.getById(req.params.id)
            return res.json(estoque)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarEstoque>, res: Response) {
        try {
            const estoqueAtualizado = await estoqueService.update(req.params.id, req.body)
            return res.json(estoqueAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const estoqueDeletado = await estoqueService.delete(req.params.id)
            return res.json(estoqueDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const estoqueController = new EstoqueController()