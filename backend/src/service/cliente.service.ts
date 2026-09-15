import { pool } from "../database/conection.js"
import { Cliente, CriarCliente } from "../types/cliente.js";

class ClienteService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM clientes")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id: string) {
        try {
            const res = await pool.query("SELECT * FROM clientes WHERE id = $1", [id])
            return res.rows[0]
        } catch (error) {
            console.error(error);
        }
    }

    async create(dados: CriarCliente): Promise<Cliente> {
    const res = await pool.query<Cliente> 
        ('INSERT INTO clientes (nome, telefone, idade, email) VALUES ($1, $2, $3, $4) RETURNING *', [dados.nome, dados.telefone, dados.idade, dados.email])

    const cliente = res.rows[0]
    if (!cliente) {
        throw new Error("O banco não retornou o cliente cadastrado");
    }

    return cliente

    }

}
export const clienteService = new ClienteService()


