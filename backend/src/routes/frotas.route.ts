import { Router, type Request, type Response } from "express"
import { frotasService } from "../service/frotas.service.js"

 export const frotas_router = Router()

frotas_router.get("/frotas", async (request: Request, response: Response) => {
    try {
        const res = await
        frotasService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})