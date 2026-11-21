import type { CriarColeta } from "../types/coleta.js";
import { coletaRepository } from "../repositories/coleta.repository.js";

class ColetaService {
  async create(coleta: CriarColeta) {
    return await coletaRepository.create(coleta);
  }
  async getAll() {
    return await coletaRepository.getAll();
  }
  async getById(id: string) {
    return await coletaRepository.getById(id);
  }
  async update(id: string, dados: CriarColeta) {
    return await coletaRepository.update(id, dados);
  }
  async delete(id: string) {
    return await coletaRepository.delete(id);
  }
}
export const coletaService = new ColetaService();
