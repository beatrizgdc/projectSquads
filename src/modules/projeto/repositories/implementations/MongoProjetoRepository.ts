import Projeto from "../../models/Projeto";
import { IProjetoRepository } from "../../../../shared/interfaces/repositories/IProjetoRepository";
import { IProjeto } from "../../../../shared/interfaces/models/IProjeto";
import mongoose from "mongoose";

export class MongoProjetoRepository implements IProjetoRepository {
  async createProjeto(projeto: IProjeto): Promise<IProjeto> {
    const newProjeto = new Projeto(projeto);
    return newProjeto.save();
  }

  async findAll(): Promise<IProjeto[]> {
    return Projeto.find().exec();
  }

  async findBySquadId(squadId: string): Promise<IProjeto[]> {
    return Projeto.find({
      squad_id: new mongoose.Types.ObjectId(squadId),
    }).exec();
  }
}

export default MongoProjetoRepository;
