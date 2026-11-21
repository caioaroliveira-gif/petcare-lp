import {Router} from "express";
import { registro_pontoController } from "../controller/registro_ponto.controller.js";

export const registro_pontoRouter = Router();

registro_pontoRouter.post("/", registro_pontoController.create)
registro_pontoRouter.get("/", registro_pontoController.getAll)
registro_pontoRouter.get("/:id", registro_pontoController.getById)
registro_pontoRouter.patch("/:id", registro_pontoController.update)
registro_pontoRouter.delete("/:id", registro_pontoController.delete)
