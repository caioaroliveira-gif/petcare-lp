import { knex } from "../database/knex.js";
import type { CriarServico } from "../types/servico.js";

class ServicoRepository {
  async create(dados: CriarServico) {
    const [servicoCriado] = await knex("servico").insert(dados).returning("*");
    return servicoCriado;
  }
  async getAll() {
    const servicos = await knex("servico").select("*").returning("*");
    return servicos;
  }
  async getById(id: string) {
    const [servico] = await knex("servico")
      .where({ id })
      .select("*")
      .returning("*");
    return servico;
  }
  async update(id: string, dados: CriarServico) {
    const [servicoAtualizado] = await knex("servico")
      .where({ id })
      .update(dados)
      .returning("*");
    return servicoAtualizado;
  }
  async delete(id: string) {
    const [servicoDeletado] = await knex("servico")
      .where({ id })
      .delete()
      .returning("*");
    return {
      servico_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        servicoDeletado,
      },
    };
  }
}
export const servicoRepository = new ServicoRepository();
