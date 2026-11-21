import {type Request, type Response} from "express";
import type { CriarLogSistema } from "../types/log_sistema.js";
import { log_sistemaService } from "../service/log_sistema.service.js";


class Log_sistemaController {

    async create(req: Request<CriarLogSistema>, res: Response) {
        try {
            const log_sistema = await log_sistemaService.create(req.body)
            return res.json(log_sistema)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const logs_sistema = await log_sistemaService.getAll()
            return res.json(logs_sistema)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const log_sistema = await log_sistemaService.getById(req.params.id)
            return res.json(log_sistema)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarLogSistema>, res: Response) {
        try {
            const log_sistemaAtualizado = await log_sistemaService.update(req.params.id, req.body)
            return res.json(log_sistemaAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const log_sistemaExcluido = await log_sistemaService.delete(req.params.id)
            return res.json(log_sistemaExcluido)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const log_sistemaController = new Log_sistemaController()