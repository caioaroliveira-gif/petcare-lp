import { knex } from "../database/knex.js";
import type { CriarEstoque } from "../types/estoque.js";

class EstoqueRepository {
  async create(dados: CriarEstoque) {
    const [estoqueCriado] = await knex("estoque").insert(dados).returning("*");
    return estoqueCriado;
  }
  async getAll() {
    const estoques = await knex("estoque").select("*").returning("*");
    return estoques;
  }
  async getById(id: string) {
    const [estoque] = await knex("estoque")
      .where({ id })
      .select("*")
      .returning("*");
    return estoque;
  }
  async update(id: string, dados: CriarEstoque) {
    const [estoqueAtualizado] = await knex("estoque")
      .where({ id })
      .update(dados)
      .returning("*");
    return estoqueAtualizado;
  }
  async delete(id: string) {
    const [estoqueDeletado] = await knex("estoque")
      .where({ id })
      .delete()
      .returning("*");
    return {
      estoque_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        estoqueDeletado,
      },
    };
  }
}
export const estoqueRepository = new EstoqueRepository();
