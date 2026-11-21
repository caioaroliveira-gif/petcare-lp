import type { CriarPetDono } from "../types/pet_dono.js";
import { pet_donoRepository } from "../repositories/pet_dono.repository.js";

class Pet_donoService {
  async create(pet_dono: CriarPetDono) {
    return await pet_donoRepository.create(pet_dono);
  }
  async getAll() {
    return await pet_donoRepository.getAll();
  }
  async getById(id: string) {
    return await pet_donoRepository.getById(id);
  }
  async update(id: string, dados: CriarPetDono) {
    return await pet_donoRepository.update(id, dados);
  }
  async delete(id: string) {
    return await pet_donoRepository.delete(id);
  }
}
export const pet_donoService = new Pet_donoService();
