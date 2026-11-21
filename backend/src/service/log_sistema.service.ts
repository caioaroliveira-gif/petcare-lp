import type { CriarLogSistema } from "../types/log_sistema.js";
import { log_sistemaRepository } from "../repositories/log_sistema.repository.js";

class Log_sistemaService {
  async create(log_sistema: CriarLogSistema) {
    return await log_sistemaRepository.create(log_sistema);
  }
  async getAll() {
    return await log_sistemaRepository.getAll();
  }
  async getById(id: string) {
    return await log_sistemaRepository.getById(id);
  }
  async update(id: string, dados: CriarLogSistema) {
    return await log_sistemaRepository.update(id, dados);
  }
  async delete(id: string) {
    return await log_sistemaRepository.delete(id);
  }
}
export const log_sistemaService = new Log_sistemaService();
