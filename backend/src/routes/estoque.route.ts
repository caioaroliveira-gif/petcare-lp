import {Router} from "express";
import { estoqueController } from "../controller/estoque.controller.js";

export const estoqueRouter = Router();

estoqueRouter.post("/", estoqueController.create)
estoqueRouter.get("/", estoqueController.getAll)
estoqueRouter.get("/", estoqueController.getById)
estoqueRouter.patch("/", estoqueController.update)
estoqueRouter.delete("/", estoqueController.delete)
