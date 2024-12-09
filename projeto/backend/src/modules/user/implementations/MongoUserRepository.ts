import User from "../models/User";

import { IUserRepository } from "../../../shared/interfaces/repositories/IUserRepository";
import { IUser } from "../../../shared/interfaces/models/IUser";

import { CreateUserDto } from "../dtos/CreateUserDto";

export class MongoUserRepository implements IUserRepository {
  async createUser(userDto: CreateUserDto): Promise<IUser> {
    const newUser = new User(userDto);
    return newUser.save();
  }

  async findUserByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email });
  }
}
