import Membro from "../../models/Membro";
import { IMembroRepository } from "../../../../shared/interfaces/repositories/IMembroRepository";
import { IMembro } from "../../../../shared/interfaces/models/IMembro";

export class MongoMembroRepository implements IMembroRepository {
  async createMembro(membro: IMembro): Promise<IMembro> {
    const newMembro = new Membro(membro);
    return newMembro.save();
  }

  async findAllBySquad(squadId: string): Promise<IMembro[]> {
    return Membro.find({ squad_id: squadId });
  }
}

export default MongoMembroRepository; // Garanta que está exportando corretamente
