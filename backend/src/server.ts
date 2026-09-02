import express, { type Request, type Response } from "express"
import { randomUUID } from "node:crypto"
import { pool } from "./database/conection.js"
import { cliente_router } from "./routes/cliente.route.js"
const app = express()
const port = 3000

app.use(express.json())

app.use("cliente", cliente_router)

app.get("/frotas", async (request: Request, response: Response) => {
    try {
        const res = await pool.query("SELECT * FROM frotas")

        response.json(res.rows)
    } catch (error) {
        console.error(error);
    }
})



app.get("/estoque", async (request: Request, response: Response) => {
    try {
        const res = await pool.query("SELECT * FROM estoque")

        response.json(res.rows)
    } catch (error) {
        console.error(error);
    }
})

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