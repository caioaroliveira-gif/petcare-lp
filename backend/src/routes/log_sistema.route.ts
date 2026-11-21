import {Router} from "express";
import { log_sistemaController } from "../controller/log_sistema.controller.js";

export const log_sistemaRouter = Router();

log_sistemaRouter.post("/", log_sistemaController.create)
log_sistemaRouter.get("/", log_sistemaController.getAll)
log_sistemaRouter.get("/", log_sistemaController.getById)
log_sistemaRouter.patch("/", log_sistemaController.update)
log_sistemaRouter.delete("/", log_sistemaController.delete)
