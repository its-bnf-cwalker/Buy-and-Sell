import {db} from '../database'
import {v4 as uuid} from "uuid";

export const createNewListingRoute = {
    method: "POST",
    path: "/api/listings",
    handler: async (req, h)=>{
        const id = uuid();
        const {name='', desc='', price=0} = req.payload;
        const views = 0;
        const userId = '12345';

        await db.query(`
        INSERT INTO listings (id, name, description, price, user_id, views) VALUES (?,?,?,?,?,?)
        `, [id, name, desc, price, userId, views]
        );
        return {id, name, desc, price, userId, views};
    }
}