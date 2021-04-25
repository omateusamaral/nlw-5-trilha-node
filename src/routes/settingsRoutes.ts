import {Router} from "express";
import {SettingsController} from '../controllers/SettingsController';

const settingsController = new SettingsController();
const routes = Router();
routes.post("/create",settingsController.store);
routes.get("/:username",settingsController.findByUsername);
routes.put("/:username",settingsController.update);


export default routes;
