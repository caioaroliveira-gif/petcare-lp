import {Router} from "express";
import { aumigoController } from "../controller/aumigo.controller.js";

export const aumigoRouter = Router();

aumigoRouter.post("/", aumigoController.create)
aumigoRouter.get("/", aumigoController.getAll)
aumigoRouter.get("/", aumigoController.getById)
aumigoRouter.patch("/", aumigoController.update)
aumigoRouter.delete("/", aumigoController.delete)
