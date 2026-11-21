import {Router} from "express";
import { servicoController } from "../controller/servico.controller.js";

export const servicoRouter = Router();

servicoRouter.post("/", servicoController.create)
servicoRouter.get("/", servicoController.getAll)
servicoRouter.get("/:id", servicoController.getById)
servicoRouter.patch("/:id", servicoController.update)
servicoRouter.delete("/:id", servicoController.delete)
