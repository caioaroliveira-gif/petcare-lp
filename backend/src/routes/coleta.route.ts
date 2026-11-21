import {Router} from "express";
import { coletaController } from "../controller/coleta.controller.js";

export const coletaRouter = Router();

coletaRouter.post("/", coletaController.create)
coletaRouter.get("/", coletaController.getAll)
coletaRouter.get("/", coletaController.getById)
coletaRouter.patch("/", coletaController.update)
coletaRouter.delete("/", coletaController.delete)
