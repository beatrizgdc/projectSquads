import { IUser } from "../models/IUser";
import { CreateUserDto } from "../../../modules/user/dtos/CreateUserDto";

export interface IUserRepository {
  createUser(userDto: CreateUserDto): Promise<IUser>;
  findUserByEmail(email: string): Promise<IUser | null>;
  findById(id: { _id: string }): Promise<IUser | null>;
}
