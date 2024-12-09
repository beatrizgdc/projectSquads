"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 3000;
console.log("Before app.listen");
app_1.default.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
console.log("After app.listen");
