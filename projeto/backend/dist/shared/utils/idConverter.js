"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToObjectId = void 0;
/**
 * Converte um id simples para um objeto com _id.
 *
 * @param id - O id a ser convertido.
 * @returns Um objeto com _id.
 */
const convertToObjectId = (id) => {
    return { _id: id };
};
exports.convertToObjectId = convertToObjectId;
