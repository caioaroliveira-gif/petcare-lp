import type { CriarRegistroPonto } from "../types/registro_ponto.js";
import { registro_pontoRepository } from "../repositories/registro_ponto.repository.js";

class Registro_pontoService {
  async create(registro_ponto: CriarRegistroPonto) {
    return await registro_pontoRepository.create(registro_ponto);
  }
  async getAll() {
    return await registro_pontoRepository.getAll();
  }
  async getById(id: string) {
    return await registro_pontoRepository.getById(id);
  }
  async update(id: string, dados: CriarRegistroPonto) {
    return await registro_pontoRepository.update(id, dados);
  }
  async delete(id: string) {
    return await registro_pontoRepository.delete(id);
  }
}
export const registro_pontoService = new Registro_pontoService();
