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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dns_1 = __importDefault(require("dns"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configuração opcional de servidores DNS do Google
dns_1.default.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbUri = process.env.MONGO_URI;
        console.log("MongoDB URI:", dbUri); // Verificar o valor
        if (!dbUri) {
            throw new Error("MongoDB URI is not defined in .env");
        }
        yield mongoose_1.default.connect(dbUri);
        console.log("MongoDB connected successfully");
    }
    catch (err) {
        console.error("Error connecting to MongoDB");
        console.error("Error details:", err);
        process.exit(1);
    }
});
exports.default = connectDB;
