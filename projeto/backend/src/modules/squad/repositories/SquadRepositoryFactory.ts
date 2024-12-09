import { ISquadRepository } from "../../../shared/interfaces/repositories/ISquadRepository";
import { MongoSquadRepository } from "./implementations/MongoSquadRepository";

export class SquadRepositoryFactory {
  static create(): ISquadRepository {
    return new MongoSquadRepository();
  }
}
