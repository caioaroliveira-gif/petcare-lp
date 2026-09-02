import { Router, type Request, type Response } from "express"
import { clienteService } from "../service/cliente.service.js"

 export const cliente_router = Router()

cliente_router.get("/cliente", async (request: Request, response: Response) => {
    try {
        const res = await
        clienteService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})