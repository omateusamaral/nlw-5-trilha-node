import express from 'express';
import "./database";
import usersRoutes from './routes/usersRoutes';
import settingsRoutes from './routes/settingsRoutes';
import messagesRoutes from './routes/messagesRoutes';
import teste from './routes/teste';

import path from 'path';


class App{
  app: express.Application;
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname,"..","public")));
    this.app.set("views",path.join(__dirname,"..","public"));
    this.app.engine("html",require("ejs").renderFile);
    this.app.set("view engine","html");
  }
  routes(){
    this.app.use('/users',usersRoutes);
    this.app.use('/settings',settingsRoutes);
    this.app.use('/messages',messagesRoutes);
    this.app.use('/teste',teste);



  }
}
export default new App().app;