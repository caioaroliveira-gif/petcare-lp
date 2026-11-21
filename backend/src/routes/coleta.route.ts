import {Router} from "express";
import { coletaController } from "../controller/coleta.controller.js";

export const coletaRouter = Router();

coletaRouter.post("/", coletaController.create)
coletaRouter.get("/", coletaController.getAll)
coletaRouter.get("/:id", coletaController.getById)
coletaRouter.patch("/:id", coletaController.update)
coletaRouter.delete("/:id", coletaController.delete)
