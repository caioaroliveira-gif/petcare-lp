import { knex } from "../database/knex.js";
import type { CriarAumigo } from "../types/aumigo.js";

class AumigoRepository {
  async create(dados: CriarAumigo) {
    const [aumigoCriado] = await knex('aumigo').insert(dados).returning("*");
    return aumigoCriado;
  }
  async getAll() {
    const aumigos = await knex('aumigo').select("*").returning("*");
    return aumigos;
  }
  async getById(id: string) {
    const [aumigo] = await knex('aumigo')
      .where({ id })
      .select("*")
      .returning("*");
    return aumigo;
  }
  async update(id: string, dados: CriarAumigo) {
    const [aumigoAtualizado] = await knex('aumigo')
      .where({ id })
      .update(dados)
      .returning("*");
    return aumigoAtualizado
  }
  async delete(id: string) {
    const [aumigoDeletado] = await knex('aumigo')
      .where({ id })
      .delete()
      .returning("*");
    return {
      animal_deletado: {
        status: "Ok",
        message: "Aumigo deletado com sucesso",
        aumigoDeletado
      },
    };
  }
}
export const aumigoRepository = new AumigoRepository();
