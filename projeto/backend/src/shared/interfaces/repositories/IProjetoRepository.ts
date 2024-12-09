import { IProjeto } from "./../models/IProjeto";

export interface IProjetoRepository {
  createProjeto(projeto: IProjeto): Promise<IProjeto>;
  findAll(): Promise<IProjeto[]>;
  findBySquadId(squadId: string): Promise<IProjeto[]>;
}
