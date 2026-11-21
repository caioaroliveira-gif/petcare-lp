import express from "express";
import { clienteRouter } from "./routes/cliente.route.js";
import { frotaRouter } from "./routes/frota.route.js";
import { estoqueRouter } from "./routes/estoque.route.js";
import { aumigoRouter } from "./routes/aumigo.route.js";
import { animalRouter} from "./routes/animal.route.js";
import { cargo_funcRouter } from "./routes/cargo_func.route.js";
import { coletaRouter } from "./routes/coleta.route.js";
import { consultaRouter } from "./routes/consulta.route.js";
import { funcionarioRouter } from "./routes/funcionario.route.js";
import { log_sistemaRouter } from "./routes/log_sistema.route.js";
import { parceiroRouter } from "./routes/parceiro.route.js";
import { pet_donoRouter } from "./routes/pet_dono.route.js";
import { registro_ponto_router } from "./routes/registro_ponto.route.js";
import { servico_router } from "./routes/servico.route.js";
import { venda_router } from "./routes/venda.route.js";
import "dotenv/config";
import { auth_router } from "./routes/auth.route.js";
import { ensureAuth } from "./middleware/authmiddleware.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/auth", auth_router);

app.use("/cliente", clienteRouter);

app.use("/frotas", frotaRouter);

app.use("/estoque", estoqueRouter);

app.use("/aumigo", aumigoRouter);

app.use("/animal", animalRouter);

app.use("/cargo", cargo_funcRouter);

app.use("/coleta", coletaRouter);

app.use("/consulta", consultaRouter);

app.use("/funcionario", funcionarioRouter);

app.use(ensureAuth)
app.use("/logsdosistema", log_sistemaRouter);

app.use("/parceiro", parceiroRouter);

app.use("/pet-dono", pet_donoRouter);

app.use("/registro-ponto", registro_ponto_router);

app.use("/servico", servico_router);

app.use("/venda", venda_router);


app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
