import { IProjetoRepository } from "./../../../shared/interfaces/repositories/IProjetoRepository";
import MongoProjetoRepository from "./implementations/MongoProjetoRepository";

export class ProjetoRepositoryFactory {
  static create(): IProjetoRepository {
    return new MongoProjetoRepository();
  }
}
