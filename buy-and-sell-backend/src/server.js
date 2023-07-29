import Hapi from "@Hapi/Hapi";
import routers from "./routes/index";
import {db} from "./database";
import * as admin from 'firebase-admin';
import credentials from "../credentials.json";

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

let server;

const start = async() =>{
    server = Hapi.server({
        port: 3006,
        host: "localhost"
    })

    // server.route({
    //     method: "POST",
    //     path: "/listing",
    //     handler: (req, h)=>{
    //         const payload = req.payload;
    //         const name = payload.name;
    //         return `Hello ${name}`
    //     }
    // })

    routers.forEach(route=> server.route(route))

    db.connect();

    await server.start()

    console.log(`Sever is listening port ${server.info.uri}`)
}

process.on("unhandledRejection", err=>{
    console.log(err);
    process.exit(1);
});

process.on('SIGINT', async ()=>{
    console.log("Stopping server...");
    await server.stop({timeout: 1000});
    console.log("Server has been stopped")
})

start()