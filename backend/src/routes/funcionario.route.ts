import {Router} from "express";
import { funcionarioController } from "../controller/funcionario.controller.js";

export const funcionarioRouter = Router();

funcionarioRouter.post("/", funcionarioController.create)
funcionarioRouter.get("/", funcionarioController.getAll)
funcionarioRouter.get("/", funcionarioController.getById)
funcionarioRouter.patch("/", funcionarioController.update)
funcionarioRouter.delete("/", funcionarioController.delete)
