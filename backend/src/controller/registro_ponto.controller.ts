import {type Request, type Response} from "express";
import type { CriarRegistroPonto } from "../types/registro_ponto.js";
import { registro_pontoService } from "../service/registro_ponto.service.js";


class Registro_pontoController {

    async create(req: Request<CriarRegistroPonto>, res: Response) {
        try {
            const registro_ponto = await registro_pontoService.create(req.body)
            return res.json(registro_ponto)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const registros_ponto = await registro_pontoService.getAll()
            return res.json(registros_ponto)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const registro_ponto = await registro_pontoService.getById(req.params.id)
            return res.json(registro_ponto)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarRegistroPonto>, res: Response) {
        try {
            const registro_pontoAtualizado = await registro_pontoService.update(req.params.id, req.body)
            return res.json(registro_pontoAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const registro_pontoExcluido = await registro_pontoService.delete(req.params.id)
            return res.json(registro_pontoExcluido)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const registro_pontoController = new Registro_pontoController()