import { Router, type Request, type Response } from "express"
import { petService } from "../service/pet.service.js"
import { CriarPet } from "../types/pet.js"

export const pet_router = Router()


pet_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            petService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


pet_router.get("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            petService.getById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})


pet_router.post("/", async (request: Request<{}, {}, CriarPet>, response: Response) => {
    try {
        const dados = request.body

        const cliente = await petService.create(dados)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})


pet_router.delete("/:id", async (request: Request<{ id: string }>, response: Response) => {
    try {
        const res = await
            petService.deleteById(request.params.id)

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

pet_router.patch("/inativar/:id", async (request: Request<{ id: string }>, response: Response) => {
    const { id } = request.params;

    try {
        const res = await petService.updateById(id);

        return response.json(res)
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Erro Interno"
        })
    }
})
