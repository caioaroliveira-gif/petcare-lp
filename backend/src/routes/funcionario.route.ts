import {Router} from "express";
import { funcionarioController } from "../controller/funcionario.controller.js";

export const funcionarioRouter = Router();

funcionarioRouter.post("/", funcionarioController.create)
funcionarioRouter.get("/", funcionarioController.getAll)
funcionarioRouter.get("/:id", funcionarioController.getById)
funcionarioRouter.patch("/:id", funcionarioController.update)
funcionarioRouter.delete("/:id", funcionarioController.delete)
