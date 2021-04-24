import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import {Request,Response} from "express";
import { SettingsService } from "../services/SettingsService";
class SettingsController{
  async store(request:Request,response:Response){
    const{chat,username} = request.body;

    const settingsService= new SettingsService();

   try {
    const settings = await settingsService.create({chat,username});
     return  response.status(200).json(settings);
   } catch (e) {
     return response.status(400).json({error:e.message});
   }




  }
}


export { SettingsController}