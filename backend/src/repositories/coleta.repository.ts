import { knex } from "../database/knex.js";
import type { CriarColeta } from "../types/coleta.js";

class ColetaRepository {
  async create(dados: CriarColeta) {
    const [coletaCriado] = await knex("coleta").insert(dados).returning("*");
    return coletaCriado;
  }
  async getAll() {
    const coletas = await knex("coleta").select("*").returning("*");
    return coletas;
  }
  async getById(id: string) {
    const [coleta] = await knex("coleta")
      .where({ id })
      .select("*")
      .returning("*");
    return coleta;
  }
  async update(id: string, dados: CriarColeta) {
    const [coletaAtualizado] = await knex("coleta")
      .where({ id })
      .update(dados)
      .returning("*");
    return coletaAtualizado;
  }
  async delete(id: string) {
    const [coletaDeletado] = await knex("coleta")
      .where({ id })
      .delete()
      .returning("*");
    return {
      coleta_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        coletaDeletado,
      },
    };
  }
}
export const coletaRepository = new ColetaRepository();
