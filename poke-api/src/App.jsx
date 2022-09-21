import { useEffect } from 'react'
import * as Style from './style'
import Top from './assets/top.png'
import Pokebola from './assets/pokeball-png.png'
import { usePokemon } from './context/pokemonInfos'
import { PokemonInfos } from './api/pokemon'
import SinglePokemon from './singlePokemon'

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
      <Style.Nav>
        <Style.Logo src={Top} />
        <Style.Poke src={Pokebola} />
      </Style.Nav>
      <div className='titulo'>
      <h1>Pokédex</h1>

      {pokemons && pokemons?.map((pokemon) => (
        <div>
          <SinglePokemon name={pokemon.name} url={pokemon.url} />
        </div>
      ))}
      </div>
    </Style.Page>
  )
}

export default App
