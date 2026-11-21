import {Router} from "express";
import { aumigoController } from "../controller/aumigo.controller.js";

export const aumigoRouter = Router();

aumigoRouter.post("/", aumigoController.create)
aumigoRouter.get("/", aumigoController.getAll)
aumigoRouter.get(":id", aumigoController.getById)
aumigoRouter.patch("/:id", aumigoController.update)
aumigoRouter.delete("/:id", aumigoController.delete)
