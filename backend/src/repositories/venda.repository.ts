import { knex } from "../database/knex.js";
import type { CriarVenda } from "../types/venda.js";

class VendaRepository {
  async create(dados: CriarVenda) {
    const [vendaCriado] = await knex("venda").insert(dados).returning("*");
    return vendaCriado;
  }
  async getAll() {
    const vendas = await knex("venda").select("*").returning("*");
    return vendas;
  }
  async getById(id: string) {
    const [venda] = await knex("venda")
      .where({ id })
      .select("*")
      .returning("*");
    return venda;
  }
  async update(id: string, dados: CriarVenda) {
    const [vendaAtualizado] = await knex("venda")
      .where({ id })
      .update(dados)
      .returning("*");
    return vendaAtualizado;
  }
  async delete(id: string) {
    const [vendaDeletado] = await knex("venda")
      .where({ id })
      .delete()
      .returning("*");
    return {
      venda_deletado: {
        status: "Ok",
        message: "Venda deletado com sucesso",
        vendaDeletado,
      },
    };
  }
}
export const vendaRepository = new VendaRepository();
