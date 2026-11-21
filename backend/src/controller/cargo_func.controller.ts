import { type Request, type Response } from "express";
import type { CriarCargoFunc } from "../types/cargo_func.js";
import { cargo_funcService } from "../service/cargo_func.service.js";

class Cargo_funcController {
  async create(req: Request<CriarCargoFunc>, res: Response) {
    try {
      const cargo_func = await cargo_funcService.create(req.body);
      return res.json(cargo_func);
    } catch (error) {
      console.error(error);
      return res.json({ message: "Erro interno do servidor" });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const cargos_func = await cargo_funcService.getAll();
      return res.json(cargos_func);
    } catch (error) {
      console.error(error);
      return res.json({ message: "Erro interno do servidor" });
    }
  }

  async getById(req: Request<{ id: string }>, res: Response) {
    try {
      const cargo_func = await cargo_funcService.getById(req.params.id);
      return res.json(cargo_func);
    } catch (error) {
      console.error(error);
      return res.json({ message: "Erro interno do servidor" });
    }
  }

  async update(req: Request<{ id: string }, CriarCargoFunc>, res: Response) {
    try {
      const cargo_funcAtualizado = await cargo_funcService.update(
        req.params.id,
        req.body,
      );
      return res.json(cargo_funcAtualizado);
    } catch (error) {
      console.error(error);
      return res.json({ message: "Erro interno do servidor" });
    }
  }

  async delete(req: Request<{ id: string }>, res: Response) {
    try {
      const cargo_funcDeletado = await cargo_funcService.delete(req.params.id);
      return res.json(cargo_funcDeletado);
    } catch (error) {
      console.error(error);
      return res.json({ message: "Erro interno do servidor" });
    }
  }
}
export const cargo_funcController = new Cargo_funcController();
