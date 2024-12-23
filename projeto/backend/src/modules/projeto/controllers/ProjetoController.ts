import { Request, Response } from "express";
import { CreateProjetoDto } from "../dtos/CreateProjetoDto";
import { ProjetoRepositoryFactory } from "../repositories/ProjetoRepositoryFactory";
import { ProjetoService } from "../services/ProjetoService";

const projetoService = new ProjetoService(ProjetoRepositoryFactory.create());

export const register = async (req: Request, res: Response) => {
  try {
    const createProjetoDto = new CreateProjetoDto(
      req.body.nome,
      req.body.descricao,
      req.body.tecnologias,
      req.body.status,
      req.body.squad_id
    );
    const projeto = await projetoService.register(createProjetoDto);
    res.status(201).json(projeto);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const projetos = await projetoService.findAll();
    res.status(200).json(projetos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectsBySquad = async (req: Request, res: Response) => {
  try {
    const squadId = req.params.squadId;
    const projetos = await projetoService.findBySquadId(squadId);
    res.status(200).json(projetos);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
