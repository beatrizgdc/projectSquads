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
exports.UserService = void 0;
const jwt_1 = require("../../../shared/utils/jwt");
const idConverter_1 = require("../../../shared/utils/idConverter");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    register(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.userRepository.createUser(createUserDto));
            const token = (0, jwt_1.generateToken)(user._id.toString());
            return { user, token };
        });
    }
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield this.userRepository.findUserByEmail(email));
            if (!user || !(yield user.comparePassword(password)))
                return null;
            const token = (0, jwt_1.generateToken)(user._id.toString());
            return { user, token };
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectId = (0, idConverter_1.convertToObjectId)(id);
            const user = (yield this.userRepository.findById(objectId));
            return user;
        });
    }
}
exports.UserService = UserService;
