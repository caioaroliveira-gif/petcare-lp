import {Router} from "express";
import { vendaController } from "../controller/venda.controller.js";

export const vendaRouter = Router();

vendaRouter.post("/", vendaController.create)
vendaRouter.get("/", vendaController.getAll)
vendaRouter.get("/", vendaController.getById)
vendaRouter.patch("/", vendaController.update)
vendaRouter.delete("/", vendaController.delete)
