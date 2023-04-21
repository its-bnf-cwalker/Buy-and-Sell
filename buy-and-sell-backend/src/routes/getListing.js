
import Boom from "@hapi/boom"
import {db} from "../database";

export const getListingRoute = {
    method:"GET",
    path: `/api/listing/{id}`,
    handler: async (req, h)=>{
        const id = req.params.id;

        const {results} = await db.query(
            'Select * from listings where id=?',
            [id]
        );

        const listing = results[0]
        if(!listing) throw Boom.notFound(`listing does not exist with id ${id}`)
        return listing;
    }
}