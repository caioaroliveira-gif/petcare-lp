import { knex } from "../database/knex.js";
import type { CriarFrota } from "../types/frota.js";

class FrotaRepository {
  async create(dados: CriarFrota) {
    const [frotaCriado] = await knex("frota").insert(dados).returning("*");
    return frotaCriado;
  }
  async getAll() {
    const frotas = await knex("frota").select("*").returning("*");
    return frotas;
  }
  async getById(id: string) {
    const [frota] = await knex("frota")
      .where({ id })
      .select("*")
      .returning("*");
    return frota;
  }
  async update(id: string, dados: CriarFrota) {
    const [frotaAtualizado] = await knex("frota")
      .where({ id })
      .update(dados)
      .returning("*");
    return frotaAtualizado;
  }
  async delete(id: string) {
    const [frotaDeletado] = await knex("frota")
      .where({ id })
      .delete()
      .returning("*");
    return {
      frota_deletado: {
        status: "Ok",
        message: "Frota deletada com sucesso",
        frotaDeletado,
      },
    };
  }
}
export const frotaRepository = new FrotaRepository();
