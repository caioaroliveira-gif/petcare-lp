import {Router} from "express";
import { pet_donoController } from "../controller/pet_dono.controller.js";

export const pet_donoRouter = Router();

pet_donoRouter.post("/", pet_donoController.create)
pet_donoRouter.get("/", pet_donoController.getAll)
pet_donoRouter.get("/", pet_donoController.getById)
pet_donoRouter.patch("/", pet_donoController.update)
pet_donoRouter.delete("/", pet_donoController.delete)
