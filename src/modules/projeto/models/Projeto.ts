import mongoose, { Schema, Document } from "mongoose";

export interface IProjeto extends Document {
  nome: string;
  descricao: string;
  tecnologias: string;
  status: string;
  squad_id: mongoose.Types.ObjectId;
}

const ProjetoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  tecnologias: { type: String },
  status: { type: String, required: true },
  squad_id: { type: mongoose.Types.ObjectId, ref: "Squad" },
});

export default mongoose.model<IProjeto>("Projeto", ProjetoSchema);
