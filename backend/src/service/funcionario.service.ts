import type { CriarFuncionario } from "../types/funcionario.js";
import { funcionarioRepository } from "../repositories/funcionario.repository.js";

class FuncionarioService {
  async create(funcionario: CriarFuncionario) {
    return await funcionarioRepository.create(funcionario);
  }
  async getAll() {
    return await funcionarioRepository.getAll();
  }
  async getById(id: string) {
    return await funcionarioRepository.getById(id);
  }
  async update(id: string, dados: CriarFuncionario) {
    return await funcionarioRepository.update(id, dados);
  }
  async delete(id: string) {
    return await funcionarioRepository.delete(id);
  }
}
export const funcionarioService = new FuncionarioService();
