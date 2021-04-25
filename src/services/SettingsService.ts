import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreated{
  chat:boolean;
  username:string;
}

class SettingsService{
  private settingsRepository: Repository<Setting>;
  constructor(){
    this.settingsRepository =getCustomRepository(SettingsRepository);
  }
async create({chat,username}: ISettingsCreated){

  //select * from settings where username = username limit 1;
  const userAlreadyExists = await this.settingsRepository.findOne({
    username
  });

  if(userAlreadyExists){
    throw new Error('User already exists');
  }
  const settings = await this.settingsRepository.create({
    chat,
    username,

  });

await this.settingsRepository.save(settings);
}
async findUserName(username:string){
  const settings = await this.settingsRepository.findOne({
    username
  });

  return settings;
}
async update(username:string,chat:boolean){
  await this.settingsRepository.createQueryBuilder().
  update(Setting)
  .set({chat})
  .where("username=:username",{
    username
  })
  .execute();
}
}

export {SettingsService}