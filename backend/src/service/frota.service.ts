import type { CriarFrota } from "../types/frota.js";
import { frotaRepository } from "../repositories/frota.repository.js";

class FrotaService {
  async create(frota: CriarFrota) {
    return await frotaRepository.create(frota);
  }
  async getAll() {
    return await frotaRepository.getAll();
  }
  async getById(id: string) {
    return await frotaRepository.getById(id);
  }
  async update(id: string, dados: CriarFrota) {
    return await frotaRepository.update(id, dados);
  }
  async delete(id: string) {
    return await frotaRepository.delete(id);
  }
}
export const frotaService = new FrotaService();
