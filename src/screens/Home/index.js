import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';
import CardPokemon from '../../components/CardPokemon';

export default function Home() {

  return(
    <Container>
      <Header 
        title="Pokédex"
      />
      
      <CardPokemon />
    </Container>
  )
}