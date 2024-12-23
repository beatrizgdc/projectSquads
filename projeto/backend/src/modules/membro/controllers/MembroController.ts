import { Request, Response } from "express";
import { AddMembroDto } from "../dtos/AddMembroDto";
import { MembroRepositoryFactory } from "../repositories/MembroRepositoryFactory";
import { MembroService } from "../services/MembroService";

const membroService = new MembroService(MembroRepositoryFactory.create());

export const addMembro = async (req: Request, res: Response) => {
  try {
    const addMembroDto = new AddMembroDto(
      req.body.nome,
      req.body.idade,
      req.body.genero,
      req.body.foto_url,
      req.body.descricao,
      req.body.habilidades,
      req.body.redes_sociais,
      req.body.squad_id,
      req.body.email // Certifique-se de incluir o campo `email`
    );
    const membro = await membroService.addMembro(addMembroDto);
    res.status(201).json(membro);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
