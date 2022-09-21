import React, { useState } from 'react';

import pokebalImage from '../../assets/pokeball-png.png'

import { 
  Container, 
  Input,
  Title,
  ContainerSearch,
  PokeballImage
} from './styles';

export default function Header({ title, pokemons }){
  const [ namePokemon, setNamePokemon ] = useState('');

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
          value={filterPokemon}
          onChange={(event) => setNamePokemon(event.target.value)}
        />
        <Title>{title}</Title>
      </ContainerSearch>
    </Container>
  );
}