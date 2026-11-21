import {type Request, type Response} from "express";
import type { CriarConsulta } from "../types/consulta.js";
import { consultaService } from "../service/consulta.service.js";


class ConsultaController {

    async create(req: Request<CriarConsulta>, res: Response) {
        try {
            const consulta = await consultaService.create(req.body)
            return res.json(consulta)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const consultas = await consultaService.getAll()
            return res.json(consultas)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const consulta = await consultaService.getById(req.params.id)
            return res.json(consulta)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarConsulta>, res: Response) {
        try {
            const consultaAtualizado = await consultaService.update(req.params.id, req.body)
            return res.json(consultaAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const consultaDeletado = await consultaService.delete(req.params.id)
            return res.json(consultaDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const consultaController = new ConsultaController()