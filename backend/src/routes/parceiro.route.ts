import {Router} from "express";
import { parceiroController } from "../controller/parceiro.controller.js";

export const parceiroRouter = Router();

parceiroRouter.post("/", parceiroController.create)
parceiroRouter.get("/", parceiroController.getAll)
parceiroRouter.get("/:id", parceiroController.getById)
parceiroRouter.patch("/:id", parceiroController.update)
parceiroRouter.delete("/:id", parceiroController.delete)
