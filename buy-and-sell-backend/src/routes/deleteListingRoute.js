import {db} from "../database"
import * as admin from 'firebase-admin'

export const deleteListingRoute = {
    method: 'DELETE',
    path: '/api/listings/{id}',
    handler: async (req, h)=>{
        const id = req.params.id;
        const token = req.headers.authtoken;
        const user = await admin.auth().verifyIdToken(token);
        const userId= user.user_id
        if(user.user_id !== userId) throw Boom.unauthorized("You cannot access other's data!")

        await db.query(
            'DELETE FROM listings WHERE id=? AND user_id=?',
            [id, userId]
        );
        return {message: "Successfully Deleted"}
    }
}