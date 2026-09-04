import { pool } from './../database/conection.js';

class EstoqueService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM estoque")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
}

export const estoqueService = new EstoqueService()