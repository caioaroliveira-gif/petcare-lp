import {Router} from "express";
import { registro_pontoController } from "../controller/registro_ponto.controller.js";

export const registro_pontoRouter = Router();

registro_pontoRouter.post("/", registro_pontoController.create)
registro_pontoRouter.get("/", registro_pontoController.getAll)
registro_pontoRouter.get("/", registro_pontoController.getById)
registro_pontoRouter.patch("/", registro_pontoController.update)
registro_pontoRouter.delete("/", registro_pontoController.delete)
