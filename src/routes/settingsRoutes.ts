import {Router} from "express";
import {SettingsController} from '../controllers/SettingsController';

const settingsController = new SettingsController();
const routes = Router();
routes.post("/create",settingsController.store);

export default routes;
