import type { CriarServico } from "../types/servico.js";
import { servicoRepository } from "../repositories/servico.repository.js";

class ServicoService {
  async create(servico: CriarServico) {
    return await servicoRepository.create(servico);
  }
  async getAll() {
    return await servicoRepository.getAll();
  }
  async getById(id: string) {
    return await servicoRepository.getById(id);
  }
  async update(id: string, dados: CriarServico) {
    return await servicoRepository.update(id, dados);
  }
  async delete(id: string) {
    return await servicoRepository.delete(id);
  }
}
export const servicoService = new ServicoService();
