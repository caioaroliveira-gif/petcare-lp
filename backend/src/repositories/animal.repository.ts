import { knex } from "../database/knex.js";
import type { CriarAnimal } from "../types/animal.js";

class AnimalRepository {
  async create(dados: CriarAnimal) {
    const [animalCriado] = await knex("animal").insert(dados).returning("*");
    return animalCriado;
  }
  async getAll() {
    const animais = await knex("animal").select("*").returning("*");
    return animais;
  }
  async getById(id: string) {
    const [animal] = await knex("animal")
      .where({ id })
      .select("*")
      .returning("*");
    return animal;
  }
  async update(id: string, dados: CriarAnimal) {
    const [animalAtualizado] = await knex("animal")
      .where({ id })
      .update(dados)
      .returning("*");
    return animalAtualizado;
  }
  async delete(id: string) {
    const [animalDeletado] = await knex("animal")
      .where({ id })
      .delete()
      .returning("*");
    return {
      animal_deletado: {
        status: "Ok",
        message: "Pet deletado com sucesso",
        animalDeletado,
      },
    };
  }
}
export const animalRepository = new AnimalRepository();
