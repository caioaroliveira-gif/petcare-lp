import { knex } from "../database/knex.js";
import type { CriarCliente } from "../types/cliente.js";

class ClienteRepository {
  async create(dados: CriarCliente) {
    const [clienteCriado] = await knex("cliente").insert(dados).returning("*");
    return clienteCriado;
  }
  async getAll() {
    const clientes = await knex("cliente").select("*").returning("*");
    return clientes;
  }
  async getById(id: string) {
    const [cliente] = await knex("cliente")
      .where({ id })
      .select("*")
      .returning("*");
    return cliente;
  }
  async update(id: string, dados: CriarCliente) {
    const [clienteAtualizado] = await knex("cliente")
      .where({ id })
      .update(dados)
      .returning("*");
    return clienteAtualizado;
  }
  async delete(id: string) {
    const [clienteDeletado] = await knex("cliente")
      .where({ id })
      .delete()
      .returning("*");
    return {
      cliente_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        clienteDeletado,
      },
    };
  }
}
export const clienteRepository = new ClienteRepository();
