import { Request, Response } from "express";
import { CreateSquadDto } from "../dtos/CreateSquadDto";
import { SquadRepositoryFactory } from "../repositories/SquadRepositoryFactory";
import { SquadService } from "../services/SquadService";

const squadService = new SquadService(SquadRepositoryFactory.create());

export const register = async (req: Request, res: Response) => {
  try {
    const createSquadDto = new CreateSquadDto(
      req.body.nome,
      req.body.logo_url,
      req.body.descricao,
      req.body.area_atuacao,
      req.body.status
    );
    const squad = await squadService.register(createSquadDto);
    res.status(201).json(squad);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const squads = await squadService.findAllWithMembers();
    res.status(200).json(squads);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
