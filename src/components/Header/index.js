import React, { useContext, useState } from 'react';

import pokebalImage from '../../assets/pokeball-png.png'
import { PokemonContext, usePokemons } from '../../context/pokemonsContext';

import { 
  Container, 
  Input,
  Title,
  ContainerSearch,
  PokeballImage
} from './styles';

export default function Header({ title }){
  const [ namePokemon, setNamePokemon ] = useState('');
  const { test, updatePokemons } = usePokemons()
  
  function handleUpdateSearch(event) {
    setNamePokemon(event.target.value)
    updatePokemons(namePokemon)
  }

  console.log(test)

  return(
    <Container>
      <PokeballImage src={pokebalImage} />

      <ContainerSearch>
        <Input 
          type="text"
          placeholder='Nome do pokemon'
          value={namePokemon}
          onChange={(event) => handleUpdateSearch(event)}
        />
        <Title>{title}</Title>
      </ContainerSearch>
    </Container>
  );
}