import type { CriarCliente } from "../types/cliente.js";
import { clienteRepository } from "../repositories/cliente.repository.js";

class ClienteService {
  async create(cliente: CriarCliente) {
    return await clienteRepository.create(cliente);
  }
  async getAll() {
    return await clienteRepository.getAll();
  }
  async getById(id: string) {
    return await clienteRepository.getById(id);
  }
  async update(id: string, dados: CriarCliente) {
    return await clienteRepository.update(id, dados);
  }
  async delete(id: string) {
    return await clienteRepository.delete(id);
  }
}
export const clienteService = new ClienteService();
