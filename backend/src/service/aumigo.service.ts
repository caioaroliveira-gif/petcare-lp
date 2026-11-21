import type { CriarAumigo } from "../types/aumigo.js";
import { aumigoRepository } from "../repositories/aumigo.repository.js";

class AumigoService {
  async create(aumigo: CriarAumigo) {
    return await aumigoRepository.create(aumigo);
  }
  async getAll() {
    return await aumigoRepository.getAll();
  }
  async getById(id: string) {
    return await aumigoRepository.getById(id);
  }
  async update(id: string, dados: CriarAumigo) {
    return await aumigoRepository.update(id, dados);
  }
  async delete(id: string) {
    return await aumigoRepository.delete(id);
  }
}
export const aumigoService = new AumigoService();
