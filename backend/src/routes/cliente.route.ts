import {Router} from "express";
import { clienteController } from "../controller/cliente.controller.js";

export const clienteRouter = Router();

clienteRouter.post("/", clienteController.create)
clienteRouter.get("/", clienteController.getAll)
clienteRouter.get("/:id", clienteController.getById)
clienteRouter.patch("/:id", clienteController.update)
clienteRouter.delete("/:id", clienteController.delete)
