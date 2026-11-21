import type { CriarConsulta } from "../types/consulta.js";
import { consultaRepository } from "../repositories/consulta.repository.js";

class ConsultaService {
  async create(consulta: CriarConsulta) {
    return await consultaRepository.create(consulta);
  }
  async getAll() {
    return await consultaRepository.getAll();
  }
  async getById(id: string) {
    return await consultaRepository.getById(id);
  }
  async update(id: string, dados: CriarConsulta) {
    return await consultaRepository.update(id, dados);
  }
  async delete(id: string) {
    return await consultaRepository.delete(id);
  }
}
export const consultaService = new ConsultaService();
