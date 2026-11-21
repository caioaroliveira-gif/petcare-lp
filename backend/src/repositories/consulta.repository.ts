import { knex } from "../database/knex.js";
import type { CriarConsulta } from "../types/consulta.js";

class ConsultaRepository {
  async create(dados: CriarConsulta) {
    const [consultaCriado] = await knex("consulta").insert(dados).returning("*");
    return consultaCriado;
  }
  async getAll() {
    const consultas = await knex("consulta").select("*").returning("*");
    return consultas;
  }
  async getById(id: string) {
    const [consulta] = await knex("consulta")
      .where({ id })
      .select("*")
      .returning("*");
    return consulta;
  }
  async update(id: string, dados: CriarConsulta) {
    const [consultaAtualizado] = await knex("consulta")
      .where({ id })
      .update(dados)
      .returning("*");
    return consultaAtualizado;
  }
  async delete(id: string) {
    const [consultaDeletado] = await knex("consulta")
      .where({ id })
      .delete()
      .returning("*");
    return {
      consulta_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        consultaDeletado,
      },
    };
  }
}
export const consultaRepository = new ConsultaRepository();
