import { useEffect } from 'react';
import { PokemonInfos } from './api/pokemon'
import { usePokemon } from './context/pokemonInfos';
import * as Style from './style'

function App() {
  const {pokemons, setPokemons} = usePokemon();

  const resultsPokemon = async () => {
    const payload = await PokemonInfos.GetAll();

    if (payload) {
      setPokemons(payload.data.results);
    }
    else {
      console.log("erro")
    }
  }

  useEffect(() => {
    resultsPokemon();
  }, []);
  console.log(pokemons)

  return (
    <Style.Page>
      <Style.Infos>
        {pokemons.map((pokemon, index) => (
          <Style.Infos key={index}>
            <p>{pokemon.name}</p>
          </Style.Infos>
        ))}
      </Style.Infos>
    </Style.Page>
  )
}

export default App
