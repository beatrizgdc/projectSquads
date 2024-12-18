import { IUserRepository } from "../../../shared/interfaces/repositories/IUserRepository";
import { CreateUserDto } from "../dtos/CreateUserDto";
import { generateToken } from "../../../shared/utils/jwt";
import { convertToObjectId } from "../../../shared/utils/idConverter";
import { IUserDocument } from "../../../shared/interfaces/models/IUser";

export class UserService {
  constructor(private userRepository: IUserRepository) {}

  async register(createUserDto: CreateUserDto) {
    const user = (await this.userRepository.createUser(
      createUserDto
    )) as IUserDocument;
    const token = generateToken(user._id.toString());
    return { user, token };
  }

  async login(email: string, password: string) {
    const user = (await this.userRepository.findUserByEmail(
      email
    )) as IUserDocument;
    if (!user || !(await user.comparePassword(password))) return null;
    const token = generateToken(user._id.toString());
    return { user, token };
  }

  async findById(id: string) {
    const objectId = convertToObjectId(id);
    const user = (await this.userRepository.findById(
      objectId
    )) as IUserDocument;
    return user;
  }
}
