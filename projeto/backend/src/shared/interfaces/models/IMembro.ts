import mongoose, { Document } from "mongoose";

export interface IMembro extends Document {
  nome: string;
  data_nascimento: Date;
  genero: string;
  foto_url: string;
  descricao: string;
  habilidades: string;
  redes_sociais: object;
  squad_id: mongoose.Types.ObjectId;
}
