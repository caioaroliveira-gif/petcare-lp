import {Router} from "express";
import { cargo_funcController } from "../controller/cargo_func.controller.js";

export const cargo_funcRouter = Router();

cargo_funcRouter.post("/", cargo_funcController.create)
cargo_funcRouter.get("/", cargo_funcController.getAll)
cargo_funcRouter.get("/", cargo_funcController.getById)
cargo_funcRouter.patch("/", cargo_funcController.update)
cargo_funcRouter.delete("/", cargo_funcController.delete)
