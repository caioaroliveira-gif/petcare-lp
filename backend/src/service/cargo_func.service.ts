import type { CriarCargoFunc } from "../types/cargo_func.js";
import { cargo_funcRepository } from "../repositories/cargo_func.repository.js";

class Cargo_funcService {
  async create(cargo_func: CriarCargoFunc) {
    return await cargo_funcRepository.create(cargo_func);
  }
  async getAll() {
    return await cargo_funcRepository.getAll();
  }
  async getById(id: string) {
    return await cargo_funcRepository.getById(id);
  }
  async update(id: string, dados: CriarCargoFunc) {
    return await cargo_funcRepository.update(id, dados);
  }
  async delete(id: string) {
    return await cargo_funcRepository.delete(id);
  }
}
export const cargo_funcService = new Cargo_funcService();
