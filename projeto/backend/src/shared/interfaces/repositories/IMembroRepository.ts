import { IMembro } from "../models/IMembro";

export interface IMembroRepository {
  createMembro(membro: IMembro): Promise<IMembro>;
  findAllBySquad(squadId: string): Promise<IMembro[]>;
}
