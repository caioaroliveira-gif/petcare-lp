import { pool } from "../database/conection.js"
import { Pet, CriarPet } from "../types/pet.js"

class PetService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM pet")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarPet): Promise<Pet> {
        const res = await pool.query<Pet>
            ('INSERT INTO pet (nome) VALUES ($1) RETURNING *', [dados.nome])

        const pet = res.rows[0]
        if (!pet) {
            throw new Error("O banco não retornou o pet cadastrado");
        }

        return pet

    }

    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE pet SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM pet WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM pet WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

}
export const petService = new PetService()


