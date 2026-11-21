import type { CriarAnimal } from "../types/animal.js";
import { animalRepository } from "../repositories/animal.repository.js";

class AnimalService {
  async create(animal: CriarAnimal) {
    return await animalRepository.create(animal);
  }
  async getAll() {
    return await animalRepository.getAll();
  }
  async getById(id: string) {
    return await animalRepository.getById(id);
  }
  async update(id: string, dados: CriarAnimal) {
    return await animalRepository.update(id, dados);
  }
  async delete(id: string) {
    return await animalRepository.delete(id);
  }
}
export const animalService = new AnimalService();
