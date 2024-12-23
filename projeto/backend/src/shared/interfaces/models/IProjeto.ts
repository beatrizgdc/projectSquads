import { Document, Types } from "mongoose";

export interface IProjeto extends Document {
  nome: string;
  descricao: string;
  tecnologias: string;
  status: string;
  squad_id: Types.ObjectId;
}
