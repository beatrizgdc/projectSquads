import { UserRepositoryFactory } from "./../../user/repositories/implementations/UserRepositoryFactory";
import mongoose from "mongoose";
import { IMembroRepository } from "../../../shared/interfaces/repositories/IMembroRepository";
import { IUserRepository } from "../../../shared/interfaces/repositories/IUserRepository";
import { AddMembroDto } from "../dtos/AddMembroDto";
import { IMembro } from "../../../shared/interfaces/models/IMembro";
import Membro from "../models/Membro";
import Squad from "../../squad/models/Squad";

export class MembroService {
  private readonly userRepository: IUserRepository;

  constructor(private readonly membroRepository: IMembroRepository) {
    this.userRepository = UserRepositoryFactory.create();
  }

  async addMembro(addMembroDto: AddMembroDto): Promise<IMembro> {
    const existingUser = await this.userRepository.findUserByEmail(
      addMembroDto.email
    );
    if (!existingUser) {
      throw new Error(
        "Usuário não cadastrado. Por favor, cadastre o usuário primeiro."
      );
    }

    const membroData: IMembro = new Membro({
      nome: addMembroDto.nome,
      data_nascimento: addMembroDto.data_nascimento,
      genero: addMembroDto.genero,
      foto_url: addMembroDto.foto_url,
      descricao: addMembroDto.descricao,
      habilidades: addMembroDto.habilidades,
      redes_sociais: addMembroDto.redes_sociais,
      squad_id: new mongoose.Types.ObjectId(addMembroDto.squad_id),
    });

    const membro = await this.membroRepository.createMembro(membroData);

    const squad = await Squad.findById(addMembroDto.squad_id);
    if (squad) {
      squad.membros.push(membro._id as mongoose.Types.ObjectId);
      await squad.save();
    }

    return membro;
  }
}
