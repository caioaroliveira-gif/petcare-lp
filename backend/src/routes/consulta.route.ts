import {Router} from "express";
import { consultaController } from "../controller/consulta.controller.js";

export const consultaRouter = Router();

consultaRouter.post("/", consultaController.create)
consultaRouter.get("/", consultaController.getAll)
consultaRouter.get("/:id", consultaController.getById)
consultaRouter.patch("/:id", consultaController.update)
consultaRouter.delete("/:id", consultaController.delete)
