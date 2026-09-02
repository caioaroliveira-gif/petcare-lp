import { pool } from "../database/conection.js";

class ClienteService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM clientes")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
}

export const clienteService = new ClienteService()