import { Document, Types } from "mongoose";

export interface ISquad extends Document {
  nome: string;
  logo_url: string;
  descricao: string;
  data_criacao: Date;
  area_atuacao: string;
  status: string;
  membros: Types.ObjectId[];
}
