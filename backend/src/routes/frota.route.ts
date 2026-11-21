import {Router} from "express";
import { frotaController } from "../controller/frota.controller.js";

export const frotaRouter = Router();

frotaRouter.post("/", frotaController.create)
frotaRouter.get("/", frotaController.getAll)
frotaRouter.get("/", frotaController.getById)
frotaRouter.patch("/", frotaController.update)
frotaRouter.delete("/", frotaController.delete)
