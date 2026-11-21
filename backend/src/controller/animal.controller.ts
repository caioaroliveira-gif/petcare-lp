import {type Request, type Response} from "express";
import type { CriarAnimal } from "../types/animal.js";
import { animalService } from "../service/animal.service.js";


class AnimalController {

    async create(req: Request<CriarAnimal>, res: Response) {
        try {
            const animal = await animalService.create(req.body)
            return res.json(animal)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const animais = await animalService.getAll()
            return res.json(animais)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async getById(req: Request<{id: string}>, res: Response) {
        try {
            const animal = await animalService.getById(req.params.id)
            return res.json(animal)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async update(req: Request<{id: string}, CriarAnimal>, res: Response) {
        try {
            const animalAtualizado = await animalService.update(req.params.id, req.body)
            return res.json(animalAtualizado)
        } catch (error) {
            console.error(error);
            return res.json({message: "Erro interno do servidor"})
        }
    }

    async delete(req: Request<{id: string}>, res: Response) {
        try {
            const animalDeletado = await animalService.delete(req.params.id)
            return res.json(animalDeletado)
        } catch (error) {
            console.error(error)
            return res.json({message: "Erro interno do servidor"})
        }
    }
}
export const animalController = new AnimalController()