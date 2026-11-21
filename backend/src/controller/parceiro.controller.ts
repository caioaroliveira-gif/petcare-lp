import {type Request, type Response} from "express";
import type { CriarParceiro } from "../types/parceiro.js";
import { parceiroService } from "../service/parceiro.service.js";


class ParceiroController {

    async create(req: Request<CriarParceiro>, res: Response) {
        try {
            const parceiro = await parceiroService.create(req.body)
            return res.json(parceiro)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const parceiros = await parceiroService.getAll()
            return res.json(parceiros)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const parceiro = await parceiroService.getById(req.params.id)
            return res.json(parceiro)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarParceiro>, res: Response) {
        try {
            const parceiroAtualizado = await parceiroService.update(req.params.id, req.body)
            return res.json(parceiroAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const parceiroDeletado = await parceiroService.delete(req.params.id)
            return res.json(parceiroDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const parceiroController = new ParceiroController()