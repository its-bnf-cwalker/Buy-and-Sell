import * as admin from 'firebase-admin'
import {db} from '../database'
import {v4 as uuid} from "uuid";

export const createNewListingRoute = {
    method: "POST",
    path: "/api/listings",
    handler: async (req, h)=>{
        const token=req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId = user.user_id;

        if(user.user_id !== userId) throw Boom.unauthorized("You cannot access other's data!")

        const id = uuid();
        const {name='', desc='', price=0} = req.payload;
        const views = 0;

        await db.query(`
        INSERT INTO listings (id, name, description, price, user_id, views) VALUES (?,?,?,?,?,?)
        `, [id, name, desc, price, userId, views]
        );
        return {id, name, desc, price, userId, views};
    }
}