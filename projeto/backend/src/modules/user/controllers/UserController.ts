import { UserRepositoryFactory } from "./../repositories/implementations/UserRepositoryFactory";
import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { CreateUserDto } from "../dtos/CreateUserDto";

const userRepository = UserRepositoryFactory.create();
const userService = new UserService(userRepository);

export const register = async (req: Request, res: Response) => {
  try {
    const createUserDto = new CreateUserDto(req.body.email, req.body.password);
    const { user, token } = await userService.register(createUserDto);
    res.status(201).json({ user, token });
  } catch (error: any) {
    // Defina o tipo de erro como 'any' para evitar problemas de compilação
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login(email, password);
    if (!result)
      return res.status(401).json({ message: "Invalid credentials" });
    res.status(200).json(result);
  } catch (error: any) {
    // Defina o tipo de erro como 'any' para evitar problemas de compilação
    res.status(400).json({ message: error.message });
  }
};
