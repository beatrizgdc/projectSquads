import mongoose, { Schema, Document } from "mongoose";

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

const MembroSchema: Schema = new Schema({
  nome: { type: String, required: true },
  data_nascimento: { type: Date, required: true },
  genero: { type: String },
  foto_url: { type: String },
  descricao: { type: String },
  habilidades: { type: String },
  redes_sociais: { type: Object },
  squad_id: { type: mongoose.Types.ObjectId, ref: "Squad" },
});

export default mongoose.model<IMembro>("Membro", MembroSchema);
