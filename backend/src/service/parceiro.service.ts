import type { CriarParceiro } from "../types/parceiro.js";
import { parceiroRepository } from "../repositories/parceiro.repository.js";

class ParceiroService {
  async create(parceiro: CriarParceiro) {
    return await parceiroRepository.create(parceiro);
  }
  async getAll() {
    return await parceiroRepository.getAll();
  }
  async getById(id: string) {
    return await parceiroRepository.getById(id);
  }
  async update(id: string, dados: CriarParceiro) {
    return await parceiroRepository.update(id, dados);
  }
  async delete(id: string) {
    return await parceiroRepository.delete(id);
  }
}
export const parceiroService = new ParceiroService();
