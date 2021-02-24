
import { Router } from 'express';
import Server from './clases/server';
import router from './routes/router';
import bodyparse from 'body-parser';
import cors from 'cors';

const server= new Server();

//BADYPARSE
server.app.use(bodyparse.urlencoded({extended:true})); //recibir datos por url
server.app.use(bodyparse.json());//recibir datos de json y va antes de la ruta

//CORSE
server.app.use(cors({origin:true, credentials:true}));//permite qeu otras personas hagan peticiones aunqu no esten en nuestro dominio


//RUTAS DE SERVICIO
server.app.use('/',router);//para direccionar las rutas

server.start(()=>{
console.log(`Servidor funcionando en el puerto ${server.port}`);
});
 