import {Router} from "express";
import { animalController } from "../controller/animal.controller.js";

export const animalRouter = Router();

animalRouter.post("/", animalController.create)
animalRouter.get("/", animalController.getAll)
animalRouter.get("/", animalController.getById)
animalRouter.patch("/", animalController.update)
animalRouter.delete("/", animalController.delete)
