import {type Request, type Response} from "express";
import type { CriarFrota } from "../types/frota.js";
import { frotaService } from "../service/frota.service.js";


class FrotaController {

    async create(req: Request<CriarFrota>, res: Response) {
        try {
            const frota = await frotaService.create(req.body)
            return res.json(frota)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const frotas = await frotaService.getAll()
            return res.json(frotas)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const frota = await frotaService.getById(req.params.id)
            return res.json(frota)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarFrota>, res: Response) {
        try {
            const frotaAtualizado = await frotaService.update(req.params.id, req.body)
            return res.json(frotaAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const frotaExcluido = await frotaService.delete(req.params.id)
            return res.json(frotaExcluido)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const frotaController = new FrotaController()