import {type Request, type Response} from "express";
import type { CriarVenda } from "../types/venda.js";
import { vendaService } from "../service/venda.service.js";


class VendaController {

    async create(req: Request<CriarVenda>, res: Response) {
        try {
            const venda = await vendaService.create(req.body)
            return res.json(venda)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const vendas = await vendaService.getAll()
            return res.json(vendas)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const venda = await vendaService.getById(req.params.id)
            return res.json(venda)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarVenda>, res: Response) {
        try {
            const vendaAtualizado = await vendaService.update(req.params.id, req.body)
            return res.json(vendaAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const vendaDeletado = await vendaService.delete(req.params.id)
            return res.json(vendaDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const vendaController = new VendaController()