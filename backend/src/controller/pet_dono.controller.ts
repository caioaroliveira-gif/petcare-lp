import {type Request, type Response} from "express";
import type { CriarPetDono } from "../types/pet_dono.js";
import { pet_donoService } from "../service/pet_dono.service.js";


class Pet_donoController {

    async create(req: Request<CriarPetDono>, res: Response) {
        try {
            const pet_dono = await pet_donoService.create(req.body)
            return res.json(pet_dono)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const pets_dono = await pet_donoService.getAll()
            return res.json(pets_dono)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const pet_dono = await pet_donoService.getById(req.params.id)
            return res.json(pet_dono)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarPetDono>, res: Response) {
        try {
            const pet_donoAtualizado = await pet_donoService.update(req.params.id, req.body)
            return res.json(pet_donoAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const pet_donoDeletado = await pet_donoService.delete(req.params.id)
            return res.json(pet_donoDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const pet_donoController = new Pet_donoController()