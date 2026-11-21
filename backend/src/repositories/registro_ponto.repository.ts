import { knex } from "../database/knex.js";
import type { CriarRegistroPonto } from "../types/registro_ponto.js";

class Registro_pontoRepository {
  async create(dados: CriarRegistroPonto) {
    const [registro_pontoCriado] = await knex("registro_ponto").insert(dados).returning("*");
    return registro_pontoCriado;
  }
  async getAll() {
    const registros_ponto = await knex("registro_ponto").select("*").returning("*");
    return registros_ponto;
  }
  async getById(id: string) {
    const [registro_ponto] = await knex("registro_ponto")
      .where({ id })
      .select("*")
      .returning("*");
    return registro_ponto;
  }
  async update(id: string, dados: CriarRegistroPonto) {
    const [registro_pontoAtualizado] = await knex("registro_ponto")
      .where({ id })
      .update(dados)
      .returning("*");
    return registro_pontoAtualizado;
  }
  async delete(id: string) {
    const [registro_pontoDeletado] = await knex("registro_ponto")
      .where({ id })
      .delete()
      .returning("*");
    return {
      registro_ponto_deletado: {
        status: "Ok",
        message: "Registro ponto deletado com sucesso",
        registro_pontoDeletado,
      },
    };
  }
}
export const registro_pontoRepository = new Registro_pontoRepository();
