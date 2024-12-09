"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryFactory = void 0;
const MongoUserRepository_1 = require("../implementations/MongoUserRepository");
class UserRepositoryFactory {
    static create() {
        return new MongoUserRepository_1.MongoUserRepository();
    }
}
exports.UserRepositoryFactory = UserRepositoryFactory;
