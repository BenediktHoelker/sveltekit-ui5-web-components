import cds from '@sap/cds';
import { building } from '$app/environment'; 

let server;
if (!building) {    
    if (server && server.close){
        await server.close();
    }
    server = await cds.server({in_memory: true});
    // await runAllTheInitFunctions();
}

export { handle } from "./auth"