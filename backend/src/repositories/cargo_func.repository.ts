import { CriarCargoFunc } from "./../types/cargo_func.js";
import { knex } from "../database/knex.js";

class Cargo_funcRepository {
  async create(dados: CriarCargoFunc) {
    const [cargo_funcCriado] = await knex("cargo_func")
      .insert(dados)
      .returning("*");
    return cargo_funcCriado;
  }
  async getAll() {
    const animais = await knex("cargo_func").select("*").returning("*");
    return animais;
  }
  async getById(id: string) {
    const [cargo_func] = await knex("cargo_func")
      .where({ id })
      .select("*")
      .returning("*");
    return cargo_func;
  }
  async update(id: string, dados: CriarCargoFunc) {
    const [cargo_funcAtualizado] = await knex("cargo_func")
      .where({ id })
      .update(dados)
      .returning("*");
    return cargo_funcAtualizado;
  }
  async delete(id: string) {
    const [cargo_funcDeletado] = await knex("cargo_func")
      .where({ id })
      .delete()
      .returning("*");
    return {
      cargo_func_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        cargo_funcDeletado,
      },
    };
  }
}
export const cargo_funcRepository = new Cargo_funcRepository();
