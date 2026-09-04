import express, { type Request, type Response } from "express"
import { randomUUID } from "node:crypto"
import { pool } from "./database/conection.js"
import { cliente_router } from "./routes/cliente.route.js"
import { frotas_router } from "./routes/frotas.route.js"
import { estoque_router } from "./routes/estoque.route.js"
import { aumigo_router } from "./routes/aumigo.route.js"


const app = express()
const port = 3000

app.use(express.json())

app.use("/cliente", cliente_router);

app.use("/frotas", frotas_router);

app.use("/estoque", estoque_router);

app.use("/aumigo", aumigo_router);

app.get("/health", (request: Request, response: Response) => {
    return response.json({
        status: "ok"
    })
})

interface CreateUserBody {
    name: string;
}

app.post("/user", (request: Request<object, object, CreateUserBody>, response: Response) => {
    const name = request.body.name?.trim()
    if (!name) {
        return response.status(400).json({
            error: "Name is required"
        })
    }

    return response.status(201).json({
        id: randomUUID(),
        name
    })
})


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})