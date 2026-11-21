import {Router} from "express";
import { vendaController } from "../controller/venda.controller.js";

export const vendaRouter = Router();

vendaRouter.post("/", vendaController.create)
vendaRouter.get("/", vendaController.getAll)
vendaRouter.get("/:id", vendaController.getById)
vendaRouter.patch("/:id", vendaController.update)
vendaRouter.delete("/:id", vendaController.delete)
