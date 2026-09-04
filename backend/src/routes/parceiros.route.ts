import { Router, type Request, type Response } from "express"
import { parceirosService } from "../service/parceiros.service.js"

export const parceiros_router = Router()

parceiros_router.get("/cliente", async (request: Request, response: Response) => {
    try {
        const res = await
            parceirosService.getAll()

            response.json(res)
    } catch (error) {
        console.error(error);
    }
})

