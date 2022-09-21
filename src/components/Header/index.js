import React, { useState } from 'react';

import pokebalImage from '../../assets/pokeball-png.png'

import { 
  Container, 
  Input,
  Title,
  ContainerSearch,
  PokeballImage
} from './styles';

export default function Header({ title }){
  const [ namePokemon, setNamePokemon ] = useState('');

  return(
    <Container>
      <PokeballImage src={pokebalImage} />

      <ContainerSearch>
        <Input 
          placeholder='Nome do pokemon'
          value={namePokemon}
          onChange={(text) => setNamePokemon(text)}
        />
        <Title>{title}</Title>
      </ContainerSearch>
    </Container>
  );
}