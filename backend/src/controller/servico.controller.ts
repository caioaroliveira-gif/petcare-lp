import {type Request, type Response} from "express";
import type { CriarServico } from "../types/servico.js";
import { servicoService } from "../service/servico.service.js";


class ServicoController {

    async create(req: Request<CriarServico>, res: Response) {
        try {
            const servico = await servicoService.create(req.body)
            return res.json(servico)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const servicos = await servicoService.getAll()
            return res.json(servicos)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const servico = await servicoService.getById(req.params.id)
            return res.json(servico)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarServico>, res: Response) {
        try {
            const servicoAtualizado = await servicoService.update(req.params.id, req.body)
            return res.json(servicoAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const servicoExcluido = await servicoService.delete(req.params.id)
            return res.json(servicoExcluido)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const servicoController = new ServicoController()