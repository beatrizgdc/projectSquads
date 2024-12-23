import Squad from "../../models/Squad";
import { ISquadRepository } from "../../../../shared/interfaces/repositories/ISquadRepository";
import { ISquad } from "../../../../shared/interfaces/models/ISquad";

export class MongoSquadRepository implements ISquadRepository {
  async createSquad(squad: ISquad): Promise<ISquad> {
    const newSquad = new Squad(squad);
    return newSquad.save();
  }

  async findAll(): Promise<ISquad[]> {
    return Squad.find();
  }

  async findAllWithMembers(): Promise<ISquad[]> {
    return Squad.find().populate("membros");
  }
}
