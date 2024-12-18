import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISquad extends Document {
  nome: string;
  logo_url: string;
  descricao: string;
  data_criacao: Date;
  area_atuacao: string;
  status: string;
  membros: Types.ObjectId[];
}

const SquadSchema: Schema = new Schema({
  nome: { type: String, required: true },
  logo_url: { type: String },
  descricao: { type: String },
  data_criacao: { type: Date, default: Date.now },
  area_atuacao: { type: String },
  status: { type: String, required: true },
  membros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Membro" }],
});

export default mongoose.model<ISquad>("Squad", SquadSchema);
