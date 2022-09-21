import api from "./connection";

export const PokemonInfos = {
  GetAll: async () => {
    try {
      const res = await api.get("/pokemon/");
      return res;
    } catch (error) {
      console.log({ message: `Error` + error });
      throw new Error(`Erro` + error);
    }
  },

  GetMoreInfos: async (id) => {
    try {
      const res = await api.get(id);
      return res;
    } catch (error) {
      console.log({ message: `Error` + error });
      throw new Error(`Erro` + error);
    }
  },
};
