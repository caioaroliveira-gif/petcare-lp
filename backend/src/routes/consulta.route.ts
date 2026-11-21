import {Router} from "express";
import { consultaController } from "../controller/consulta.controller.js";

export const consultaRouter = Router();

consultaRouter.post("/", consultaController.create)
consultaRouter.get("/", consultaController.getAll)
consultaRouter.get("/", consultaController.getById)
consultaRouter.patch("/", consultaController.update)
consultaRouter.delete("/", consultaController.delete)
