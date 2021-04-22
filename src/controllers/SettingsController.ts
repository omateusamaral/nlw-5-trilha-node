import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";
import {Request,Response} from "express";
class SettingsController{
  async store(request:Request,response:Response){
    const{chat,username} = request.body;
    const settingsRepository = getCustomRepository(SettingsRepository);
  
    const settings = settingsRepository.create({
      chat,
      username,
  
    });
  
  await settingsRepository.save(settings);
  
  response.status(200).json(settings);
  }
}


export { SettingsController}