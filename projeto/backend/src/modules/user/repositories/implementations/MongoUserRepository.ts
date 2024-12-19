import User from "../../models/User";
import { IUserRepository } from "../../../../shared/interfaces/repositories/IUserRepository";
import { IUserDocument } from "../../../../shared/interfaces/models/IUser";
import { CreateUserDto } from "../../dtos/CreateUserDto";

export class MongoUserRepository implements IUserRepository {
  async createUser(userDto: CreateUserDto): Promise<IUserDocument> {
    const newUser = new User(userDto);
    return newUser.save();
  }

  async findUserByEmail(email: string): Promise<IUserDocument | null> {
    return User.findOne({ email });
  }

  async findById(id: { _id: string }): Promise<IUserDocument | null> {
    return User.findById(id._id);
  }
}
