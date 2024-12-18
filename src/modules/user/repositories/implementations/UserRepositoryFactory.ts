import { MongoUserRepository } from "../implementations/MongoUserRepository";

export class UserRepositoryFactory {
  static create(): MongoUserRepository {
    return new MongoUserRepository();
  }
}
