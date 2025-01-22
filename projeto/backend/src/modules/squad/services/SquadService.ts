import { ISquadRepository } from "../../../shared/interfaces/repositories/ISquadRepository";
import { CreateSquadDto } from "../dtos/CreateSquadDto";
import { ISquad } from "../../../shared/interfaces/models/ISquad";

export class SquadService {
  constructor(private readonly squadRepository: ISquadRepository) {}

  async register(createSquadDto: CreateSquadDto): Promise<ISquad> {
    const squadData = {
      nome: createSquadDto.nome,
      logo_url: createSquadDto.logo_url,
      descricao: createSquadDto.descricao,
      data_criacao: new Date(),
      area_atuacao: createSquadDto.area_atuacao,
      status: createSquadDto.status,
    } as ISquad;

    const squad = await this.squadRepository.createSquad(squadData);
    return squad;
  }

  async findAll(): Promise<ISquad[]> {
    return this.squadRepository.findAll();
  }

  async findAllWithMembers(): Promise<ISquad[]> {
    return this.squadRepository.findAllWithMembers();
  }
}
