import { pool } from './../database/conection.js';

class ParceirosService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM parceiros")
            return res.rows
        } catch (error) {
            console.error(error);
        }
    }
}

export const parceirosService = new ParceirosService()