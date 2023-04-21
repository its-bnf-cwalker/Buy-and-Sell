import {db} from "../database"

export const updateListingRoute = {
    method: "POST",
    path: "/api/listings/{id}",
    handler: async(req,h)=>{
        const id = req.params.id;
        const {name, desc, price}= req.payload;
        const userId = '12345';
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