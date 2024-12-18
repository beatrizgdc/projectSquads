import { ISquad } from "../models/ISquad";

export interface ISquadRepository {
  createSquad(squad: ISquad): Promise<ISquad>;
  findAll(): Promise<ISquad[]>;
  findAllWithMembers(): Promise<ISquad[]>;
}
