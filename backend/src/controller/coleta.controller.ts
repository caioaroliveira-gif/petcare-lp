import {type Request, type Response} from "express";
import type { CriarColeta } from "../types/coleta.js";
import { coletaService } from "../service/coleta.service.js";


class ColetaController {

    async create(req: Request<CriarColeta>, res: Response) {
        try {
            const coleta = await coletaService.create(req.body)
            return res.json(coleta)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const coletas = await coletaService.getAll()
            return res.json(coletas)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const coleta = await coletaService.getById(req.params.id)
            return res.json(coleta)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarColeta>, res: Response) {
        try {
            const coletaAtualizado = await coletaService.update(req.params.id, req.body)
            return res.json(coletaAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const coletaExcluido = await coletaService.delete(req.params.id)
            return res.json(coletaExcluido)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const coletaController = new ColetaController()