import {type Request, type Response} from "express";
import type { CriarFuncionario } from "../types/funcionario.js";
import { funcionarioService } from "../service/funcionario.service.js";


class FuncionarioController {

    async create(req: Request<CriarFuncionario>, res: Response) {
        try {
            const funcionario = await funcionarioService.create(req.body)
            return res.json(funcionario)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const funcionarios = await funcionarioService.getAll()
            return res.json(funcionarios)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const funcionario = await funcionarioService.getById(req.params.id)
            return res.json(funcionario)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarFuncionario>, res: Response) {
        try {
            const funcionarioAtualizado = await funcionarioService.update(req.params.id, req.body)
            return res.json(funcionarioAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const funcionarioDeletado = await funcionarioService.delete(req.params.id)
            return res.json(funcionarioDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const funcionarioController = new FuncionarioController()