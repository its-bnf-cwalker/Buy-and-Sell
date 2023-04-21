import Boom from "@hapi/boom"
import {db} from "../database";

export const addViewToListingRoute = {
    method: "POST",
    path: `/api/listings/{id}/add-view`,
    handler: async (req, h)=>{
        const id = req.params.id;

        await db.query(
            'UPDATE listings SET views=views+1 WHERE id=?',
            [id],
        )

        const {results} = await db.query(
            'Select * from listings where id=?',
            [id]
        );

        const updateListing = results[0]
        if(!updateListing) throw Boom.notFound(`listing does not exist with id ${id}`)
        return updateListing;
    }
}