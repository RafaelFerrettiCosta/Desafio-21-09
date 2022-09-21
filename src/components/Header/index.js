import React from 'react';
import pokebalImage from '../../assets/pokeball-png.png'

import { HeaderContainer, PokeballImage } from './styles'

export default function Header(){
  return(
    <HeaderContainer>
      <PokeballImage src={pokebalImage} />
    </HeaderContainer>
  );
}