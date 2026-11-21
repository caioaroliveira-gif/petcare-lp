import { knex } from "../database/knex.js";
import type { CriarParceiro } from "../types/parceiro.js";

class ParceiroRepository {
  async create(dados: CriarParceiro) {
    const [parceiroCriado] = await knex("parceiro").insert(dados).returning("*");
    return parceiroCriado;
  }
  async getAll() {
    const parceiros = await knex("parceiro").select("*").returning("*");
    return parceiros;
  }
  async getById(id: string) {
    const [parceiro] = await knex("parceiro")
      .where({ id })
      .select("*")
      .returning("*");
    return parceiro;
  }
  async update(id: string, dados: CriarParceiro) {
    const [parceiroAtualizado] = await knex("parceiro")
      .where({ id })
      .update(dados)
      .returning("*");
    return parceiroAtualizado;
  }
  async delete(id: string) {
    const [parceiroDeletado] = await knex("parceiro")
      .where({ id })
      .delete()
      .returning("*");
    return {
      parceiro_deletado: {
        status: "Ok",
        message: "Parceiro deletado com sucesso",
        parceiroDeletado,
      },
    };
  }
}
export const parceiroRepository = new ParceiroRepository();
