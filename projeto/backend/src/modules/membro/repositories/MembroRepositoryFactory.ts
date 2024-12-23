import { IMembroRepository } from "../../../shared/interfaces/repositories/IMembroRepository";
import { MongoMembroRepository } from "./implementations/MongoMembroRepository";

export class MembroRepositoryFactory {
  static create(): IMembroRepository {
    return new MongoMembroRepository();
  }
}
