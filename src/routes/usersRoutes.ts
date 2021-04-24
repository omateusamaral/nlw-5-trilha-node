import {Router} from "express";
import {UsersController} from '../controllers/UsersController';

const userController = new UsersController();
const routes = Router();
routes.post("/create",userController.create);

export default routes;