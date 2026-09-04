import { pool } from "../database/conection.js";

class FrotasService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM frotas")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
}

export const frotasService = new FrotasService()