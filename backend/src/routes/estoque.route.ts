import {Router} from "express";
import { estoqueController } from "../controller/estoque.controller.js";

export const estoqueRouter = Router();

estoqueRouter.post("/", estoqueController.create)
estoqueRouter.get("/", estoqueController.getAll)
estoqueRouter.get("/:id", estoqueController.getById)
estoqueRouter.patch("/:id", estoqueController.update)
estoqueRouter.delete("/:id", estoqueController.delete)
