import {Router} from "express";
import { cargo_funcController } from "../controller/cargo_func.controller.js";

export const cargo_funcRouter = Router();

cargo_funcRouter.post("/", cargo_funcController.create)
cargo_funcRouter.get("/", cargo_funcController.getAll)
cargo_funcRouter.get("/:id", cargo_funcController.getById)
cargo_funcRouter.patch("/:id", cargo_funcController.update)
cargo_funcRouter.delete("/:id", cargo_funcController.delete)
