import {Router} from "express";
import { parceiroController } from "../controller/parceiro.controller.js";

export const parceiroRouter = Router();

parceiroRouter.post("/", parceiroController.create)
parceiroRouter.get("/", parceiroController.getAll)
parceiroRouter.get("/", parceiroController.getById)
parceiroRouter.patch("/", parceiroController.update)
parceiroRouter.delete("/", parceiroController.delete)
