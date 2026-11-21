import type { CriarVenda } from "../types/venda.js";
import { vendaRepository } from "../repositories/venda.repository.js";

class VendaService {
  async create(venda: CriarVenda) {
    return await vendaRepository.create(venda);
  }
  async getAll() {
    return await vendaRepository.getAll();
  }
  async getById(id: string) {
    return await vendaRepository.getById(id);
  }
  async update(id: string, dados: CriarVenda) {
    return await vendaRepository.update(id, dados);
  }
  async delete(id: string) {
    return await vendaRepository.delete(id);
  }
}
export const vendaService = new VendaService();
