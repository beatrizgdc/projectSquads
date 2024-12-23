import { IProjeto } from "./../models/Projeto";
import { IProjetoRepository } from "./../../../shared/interfaces/repositories/IProjetoRepository";

import { CreateProjetoDto } from "../dtos/CreateProjetoDto";

import mongoose from "mongoose";

export class ProjetoService {
  constructor(private readonly projetoRepository: IProjetoRepository) {}

  async register(createProjetoDto: CreateProjetoDto): Promise<IProjeto> {
    const projetoData: Partial<IProjeto> = {
      nome: createProjetoDto.nome,
      descricao: createProjetoDto.descricao,
      tecnologias: createProjetoDto.tecnologias,
      status: createProjetoDto.status,
      squad_id: new mongoose.Types.ObjectId(createProjetoDto.squad_id),
    };

    const projeto = await this.projetoRepository.createProjeto(
      projetoData as IProjeto
    );
    return projeto;
  }

  async findAll(): Promise<IProjeto[]> {
    return this.projetoRepository.findAll();
  }

  async findBySquadId(squadId: string): Promise<IProjeto[]> {
    return this.projetoRepository.findBySquadId(squadId);
  }
}
