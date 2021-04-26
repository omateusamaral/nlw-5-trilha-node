import app from './app';
import { createServer } from "http";
import {Server,Socket} from "socket.io";

const http = createServer(app); // criando protocolo http
const io = new Server(http);  //criando protocolo ws

io.on("connection",(socket:Socket)=>{
   console.log("conectou", socket.id);
  
});



export {http,io}