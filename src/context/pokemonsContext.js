import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext({})

export function ContextProvider({ children }) {
    const [test, setTest] = useState('oi')

    function updatePokemons(value) {
        setTest(value)
    }

    return (
        <PokemonContext.Provider value={{ test, updatePokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}

export const usePokemons = () => {
    const context = useContext(PokemonContext)
    return context
}
