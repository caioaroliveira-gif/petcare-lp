import {Router} from "express";
import { servicoController } from "../controller/servico.controller.js";

export const servicoRouter = Router();

servicoRouter.post("/", servicoController.create)
servicoRouter.get("/", servicoController.getAll)
servicoRouter.get("/", servicoController.getById)
servicoRouter.patch("/", servicoController.update)
servicoRouter.delete("/", servicoController.delete)
