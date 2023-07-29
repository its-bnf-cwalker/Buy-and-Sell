import {db} from "../database"
import * as admin from "firebase-admin"

export const updateListingRoute = {
    method: "POST",
    path: "/api/listings/{id}",
    handler: async(req,h)=>{
        const token= req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const id = req.params.id;
        const {name, desc, price}= req.payload;
        const userId = user.user_id;
        await db.query(`
        UPDATE listings SET name=?, description=?, price=? WHERE id=? AND user_id=?
        `,[name, desc, price, id, userId]
        );
        const {results}= await db.query(
            `select * from listings where id=? AND user_id=?`,
            [id, userId],
        )
        return results[0];
    }
}