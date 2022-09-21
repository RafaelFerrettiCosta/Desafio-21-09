import React, { useState } from 'react';

import { 
  Container, 
  Input,
  Title,
  ContainerSearch
} from './styles';

export default function Header({ title }){
  const [ namePokemon, setNamePokemon ] = useState('');

  return(
    <Container>

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