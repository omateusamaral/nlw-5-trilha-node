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

  async findByUsername(request:Request,response:Response){
    const {username} = request.params;
    const settingsService= new SettingsService();
 
    const settings = settingsService.findUserName(username);
    
    return settings;
  }

  async update(request:Request,response:Response){
    const {username} = request.params;
    const {chat} = request.body;

    const settingsService= new SettingsService();
 
    const settings = settingsService.update(username,chat);
    
    return response.json(settings);
  }


}


export { SettingsController}