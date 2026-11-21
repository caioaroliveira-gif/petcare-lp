import {Router} from "express";
import { frotaController } from "../controller/frota.controller.js";

export const frotaRouter = Router();

frotaRouter.post("/", frotaController.create)
frotaRouter.get("/", frotaController.getAll)
frotaRouter.get("/:id", frotaController.getById)
frotaRouter.patch("/:id", frotaController.update)
frotaRouter.delete("/id", frotaController.delete)
