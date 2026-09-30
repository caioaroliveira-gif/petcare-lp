import { auth_Service } from "../service/auth.service.js"
import { Router, type Request, type Response } from "express"
import type { LoginResponse } from "../types/login_funcionario.js"


export const auth_router = Router()


auth_router.get("/", async (request: Request, response: Response) => {
    try {
        const res = await
            auth_Service.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
        erro: "Erro Interno"
    })
})
