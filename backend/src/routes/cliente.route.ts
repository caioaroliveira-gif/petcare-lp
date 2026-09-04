import { Router, type Request, type Response } from "express"
import { clienteService } from "../service/cliente.service.js"
import { CriarCliente } from "../types/cliente.js"

export const cliente_router = Router()


cliente_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            clienteService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})

cliente_router.post("/", async (request: Request<{}, {}, CriarCliente>, response: Response) => {
    try {
        const { email, idade, nome, telefone } = request.body

        const cliente = await clienteService.create(nome, telefone, idade, email)
        return response.status(201).json(cliente)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })

})