import {Router} from "express";
import { animalController } from "../controller/animal.controller.js";

export const animalRouter = Router();

animalRouter.post("/", animalController.create)
animalRouter.get("/", animalController.getAll)
animalRouter.get("/:id", animalController.getById)
animalRouter.patch("/:id", animalController.update)
animalRouter.delete("/:id", animalController.delete)
