import express from 'express';
import "./src/database";
import usersRoutes from './src/routes/usersRoutes';
import settingsRoutes from './src/routes/settingsRoutes';
import messagesRoutes from './src/routes/messagesRoutes';



class App{
  app: express.Application;
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.app.use(express.json());
  }
  routes(){
    this.app.use('/users',usersRoutes);
    this.app.use('/settings',settingsRoutes);
    this.app.use('/messages',messagesRoutes);


  }
}
export default new App().app;