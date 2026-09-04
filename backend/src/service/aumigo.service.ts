import { pool } from "../database/conection.js";

class AumigoService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM aumigos")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
}

export const aumigoService = new AumigoService()