
import {Request, Response} from 'express'
import { MessagesRepository } from '../repositories/MessageRepository'
import { MessagesService } from '../services/MessagesService'

class MessagesController {

    async create(request: Request, response: Response): Promise<Response> {
        try {
          const {admin_id,text,user_id} = request.body;
          const messageService = new MessagesService();

          const message = await messageService.create({
            admin_id,
            text,
            user_id
          });

          return response.status(200).json(message);
        }
        catch(e) {
          return response.status(400).json({
            message: e.message
        });
        }
    }
    async showByUser(request: Request, response: Response): Promise<Response> {
      const {id} = request.params;

      const messagesService = new MessagesService();

      const list = await messagesService.listByUser(id);
      
      return response.json(list);
    }

}

export {MessagesController}