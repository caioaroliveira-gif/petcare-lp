import { pool } from "../database/conection.js"
import bcrypt from 'bcrypt'
import type { LoginData, LoginResponse } from "../types/login_funcionario.js"
import 'dotenv/config'

class authService {

  async getAll() {
    try {
      const res = await pool.query("SELECT * FROM funcionario")
      return res.rows
    } catch (error) {
      console.error(error);
    }
  }

  async create(dados: LoginData): Promise<LoginData> {

    const senhaForte = await bcrypt.hash(dados.senha, Number(process.env.SENHA_FORTE))

    const res = await pool.query<LoginData>(
      'INSERT INTO funcionario (nome, id_cargo, email, senha) VALUES ($1, $2, $3, $4) RETURNING *',
      [dados.nome, dados.id_cargo, dados.email, senhaForte]
    )

    return res.rows[0]
  }


  async getById(id: string) {
    try {
      const res = await pool.query("SELECT * FROM funcionario WHERE id = $1", [id])
      return res.rows[0]
    } catch (error) {
      console.error(error);
    }
  }

}
export const auth_Service = new authService()


