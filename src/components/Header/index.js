import React, { useContext, useState } from 'react';

import pokebalImage from '../../assets/pokeball-png.png'
import { usePokemons } from '../../context/pokemonsContext';

import { 
  Container, 
  Input,
  Title,
  ContainerSearch,
  PokeballImage
} from './styles';

export default function Header({ title, pokemons }){
  const [ namePokemon, setNamePokemon ] = useState('');
  const { test, updatePokemons } = usePokemons()
  
  function handleUpdateSearch(event) {
    setNamePokemon(event.target.value)
    updatePokemons(namePokemon)
  }

  console.log(test)

  const filterPokemon = pokemons && pokemons.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(namePokemon.toLowerCase());
  });

  return(
    <Container>
      <PokeballImage src={pokebalImage} />
      
      <ContainerSearch>
        <Input 
          type="text"
          placeholder='Nome do pokemon'
          onChange={(event) => handleUpdateSearch(event)}
          value={filterPokemon}
        />
        <Title>{title}</Title>
      </ContainerSearch>
    </Container>
  );
}