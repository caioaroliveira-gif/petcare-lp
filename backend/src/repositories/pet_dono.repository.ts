import { knex } from "../database/knex.js";
import type { CriarPetDono } from "../types/pet_dono.js";

class Pet_donoRepository {
  async create(dados: CriarPetDono) {
    const [pet_donoCriado] = await knex("pet_dono").insert(dados).returning("*");
    return pet_donoCriado;
  }
  async getAll() {
    const pets_dono = await knex("pet_dono").select("*").returning("*");
    return pets_dono;
  }
  async getById(id: string) {
    const [pet_dono] = await knex("pet_dono")
      .where({ id })
      .select("*")
      .returning("*");
    return pet_dono;
  }
  async update(id: string, dados: CriarPetDono) {
    const [pet_donoAtualizado] = await knex("pet_dono")
      .where({ id })
      .update(dados)
      .returning("*");
    return pet_donoAtualizado;
  }
  async delete(id: string) {
    const [pet_donoDeletado] = await knex("pet_dono")
      .where({ id })
      .delete()
      .returning("*");
    return {
      pet_dono_deletado: {
        status: "Ok",
        message: "Dono do pet deletado com sucesso",
        pet_donoDeletado,
      },
    };
  }
}
export const pet_donoRepository = new Pet_donoRepository();
