import {type Request, type Response} from "express";
import type { CriarCliente } from "../types/cliente.js";
import { clienteService } from "../service/cliente.service.js";


class ClienteController {

    async create(req: Request<CriarCliente>, res: Response) {
        try {
            const cliente = await clienteService.create(req.body)
            return res.json(cliente)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const clientes = await clienteService.getAll()
            return res.json(clientes)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const cliente = await clienteService.getById(req.params.id)
            return res.json(cliente)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarCliente>, res: Response) {
        try {
            const clienteAtualizado = await clienteService.update(req.params.id, req.body)
            return res.json(clienteAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const clienteDeletado = await clienteService.delete(req.params.id)
            return res.json(clienteDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const clienteController = new ClienteController()