import bcrypt from "bcrypt";
import { knex } from "../database/knex.js";
import type { CriarFuncionario } from "../types/funcionario.js";

class FuncionarioRepository {
  async create(dados: CriarFuncionario) {
    const saltRounds = Number(process.env.BCRYPT_SALT) || 10;
    const senhaCriptografada = await bcrypt.hash(dados.senha, saltRounds);
    const dadosParaSalvar = {
      ...dados,
      senha: senhaCriptografada,
    };

    const [funcionarioCriado] = await knex("funcionario")
      .insert(dadosParaSalvar)
      .returning("*");
    return funcionarioCriado;
  }

  async getAll() {
    const funcionarios = await knex("funcionario").select("*").returning("*");
    return funcionarios;
  }

  async getById(id: string) {
    const [funcionario] = await knex("funcionario")
      .where({ id })
      .select("*")
      .returning("*");
    return funcionario;
  }

  async update(id: string, dados: CriarFuncionario) {
    const [funcionarioAtualizado] = await knex("funcionario")
      .where({ id })
      .update(dados)
      .returning("*");
    return funcionarioAtualizado;
  }

  async delete(id: string) {
    const [funcionarioDeletado] = await knex("funcionario")
      .where({ id })
      .delete()
      .returning("*");
    return {
      funcionario_deletado: {
        status: "Ok",
        message: "Funcionario deletado com sucesso",
        funcionarioDeletado,
      },
    };
  }
}
export const funcionarioRepository = new FuncionarioRepository();
