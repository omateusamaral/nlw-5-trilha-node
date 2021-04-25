import {Repository,EntityRepository} from "typeorm";
import {Connection} from "../entities/Connection";
@EntityRepository(Connection)
export class ConnectionsRepository extends Repository<Connection>{

}