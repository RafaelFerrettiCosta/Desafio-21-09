import { createContext, useContext, useState } from "react";

const PokeContext = createContext();

export const PokeContextProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([
    {
      name: "",
      url: "",
    },
  ]);

  return (
    <PokeContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokeContext.Provider>
  );
};

export const usePokemon = () => {
  const contextPokeInfos = useContext(PokeContext);

  if (!contextPokeInfos) {
    throw new Error(
      "usePokemon deve ser utilizado dentro do PokeContextProvider"
    );
  }

  return contextPokeInfos;
};
