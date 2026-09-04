import { Router, type Request, type Response } from "express";
import { aumigoService } from "../service/aumigo.service.js";

export const aumigo_router = Router()

aumigo_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
        aumigoService.getAll()

        response.json(res)
    } catch (error) {
        console.error(error);
    }
})