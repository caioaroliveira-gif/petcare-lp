import { pool } from "../database/conection.js"
import type {CriarFuncionario, Funcionario} from "../types/funcionario.js"

class FuncionarioService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM cliente")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarFuncionario): Promise<Funcionario> {
        const res = await pool.query<Funcionario>
            ('INSERT INTO funcionario (nome, id_cargo, idade, email) VALUES ($1, $2, $3, $4) RETURNING *', [dados.nome, dados.id_cargo, dados.idade, dados.email])

        const funcionario = res.rows[0]
        if (!funcionario) {
            throw new Error("O banco não retornou o funcionario cadastrado");
        }

        return funcionario

    }

    async updateById(id: string) {
        try {
            const res = await pool.query("UPDATE funcionario SET id = id WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM funcionario WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }
    async deleteById(id: string) {
        try {
            const res = await pool.query("DELETE FROM funcionario WHERE id = $1 RETURNING *", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

}
export const funcionarioService = new FuncionarioService()


