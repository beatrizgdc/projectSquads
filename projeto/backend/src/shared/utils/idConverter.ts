/**
 * Converte um id simples para um objeto com _id.
 *
 * @param id - O id a ser convertido.
 * @returns Um objeto com _id.
 */
export const convertToObjectId = (id: string) => {
  return { _id: id };
};
