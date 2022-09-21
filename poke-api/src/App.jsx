import { useState } from 'react'
import * as Style from './style'
import Top from './assets/top.png'
import Pokebola from './assets/pokeball-png.png'

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
      </div>
      
    </Style.Page>
  )
}

export default App
