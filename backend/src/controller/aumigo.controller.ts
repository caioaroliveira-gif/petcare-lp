import {type Request, type Response} from "express";
import { aumigoService } from "../service/aumigo.service.js";
import { CriarAumigo } from "../types/aumigo.js";


class AumigoController {

    async create(req: Request<CriarAumigo>, res: Response) {
        try {
            const aumigo = await aumigoService.create(req.body)
            return res.json(aumigo)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const aumigos = await aumigoService.getAll()
            return res.json(aumigos)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const aumigo = await aumigoService.getById(req.params.id)
            return res.json(aumigo)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarAumigo>, res: Response) {
        try {
            const aumigoAtualizado = await aumigoService.update(req.params.id, req.body)
            return res.json(aumigoAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const aumigoDeletado = await aumigoService.delete(req.params.id)
            return res.json(aumigoDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const aumigoController = new AumigoController()