"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const UserRepositoryFactory_1 = require("./../repositories/implementations/UserRepositoryFactory");
const UserService_1 = require("../services/UserService");
const CreateUserDto_1 = require("../dtos/CreateUserDto");
const userRepository = UserRepositoryFactory_1.UserRepositoryFactory.create();
const userService = new UserService_1.UserService(userRepository);
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUserDto = new CreateUserDto_1.CreateUserDto(req.body.email, req.body.password);
        const { user, token } = yield userService.register(createUserDto);
        res.status(201).json({ user, token });
    }
    catch (error) {
        // Defina o tipo de erro como 'any' para evitar problemas de compilação
        res.status(400).json({ message: error.message });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const result = yield userService.login(email, password);
        if (!result)
            return res.status(401).json({ message: "Invalid credentials" });
        res.status(200).json(result);
    }
    catch (error) {
        // Defina o tipo de erro como 'any' para evitar problemas de compilação
        res.status(400).json({ message: error.message });
    }
});
exports.login = login;
