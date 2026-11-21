import type { CriarEstoque } from "../types/estoque.js";
import { estoqueRepository } from "../repositories/estoque.repository.js";

class EstoqueService {
  async create(estoque: CriarEstoque) {
    return await estoqueRepository.create(estoque);
  }
  async getAll() {
    return await estoqueRepository.getAll();
  }
  async getById(id: string) {
    return await estoqueRepository.getById(id);
  }
  async update(id: string, dados: CriarEstoque) {
    return await estoqueRepository.update(id, dados);
  }
  async delete(id: string) {
    return await estoqueRepository.delete(id);
  }
}
export const estoqueService = new EstoqueService();
