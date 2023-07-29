import {fakeListing} from "./fake-data"
import {db, connection} from '../database'
import * as admin from "firebase-admin";

export const getAllListingRoute={
    method: "GET",
    path: "/api/listings",
    handler: async(req, h)=>{


        const {results} = await db.query(
            'Select * from listings'
        );
        return results;  
    },
}