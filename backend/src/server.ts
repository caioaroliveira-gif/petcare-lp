import express, { type Request, type Response } from "express"
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


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})