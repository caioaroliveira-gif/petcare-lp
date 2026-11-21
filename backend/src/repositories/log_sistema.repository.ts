import { knex } from "../database/knex.js";
import type { CriarLogSistema } from "../types/log_sistema.js";

class Log_sistemaRepository {
  async create(dados: CriarLogSistema) {
    const [log_sistemaCriado] = await knex("log_sistema").insert(dados).returning("*");
    return log_sistemaCriado;
  }
  async getAll() {
    const logs_sistema = await knex("log_sistema").select("*").returning("*");
    return logs_sistema;
  }
  async getById(id: string) {
    const [log_sistema] = await knex("log_sistema")
      .where({ id })
      .select("*")
      .returning("*");
    return log_sistema;
  }
  async update(id: string, dados: CriarLogSistema) {
    const [log_sistemaAtualizado] = await knex("log_sistema")
      .where({ id })
      .update(dados)
      .returning("*");
    return log_sistemaAtualizado;
  }
  async delete(id: string) {
    const [log_sistemaDeletado] = await knex("log_sistema")
      .where({ id })
      .delete()
      .returning("*");
    return {
      log_sistema_deletado: {
        status: "Ok",
        message: "Log deletado com sucesso",
        log_sistemaDeletado,
      },
    };
  }
}
export const log_sistemaRepository = new Log_sistemaRepository();
