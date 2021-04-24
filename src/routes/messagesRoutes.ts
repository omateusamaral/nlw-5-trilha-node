import {Router} from "express";
import {MessagesController} from '../controllers/MessagesController';

const messagesController = new MessagesController();
const routes = Router();
routes.post("/create",messagesController.create);
routes.get("/list/:id",messagesController.showByUser);


export default routes;