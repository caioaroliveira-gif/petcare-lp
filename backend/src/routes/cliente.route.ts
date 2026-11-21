import {Router} from "express";
import { clienteController } from "../controller/cliente.controller.js";

export const clienteRouter = Router();

clienteRouter.post("/", clienteController.create)
clienteRouter.get("/", clienteController.getAll)
clienteRouter.get("/", clienteController.getById)
clienteRouter.patch("/", clienteController.update)
clienteRouter.delete("/", clienteController.delete)
