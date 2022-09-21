import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Header from '../../components/Header';

import api from '../../Services/api';

export default function Home() {
  const [ Pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    loadPokemons();
  },[]);

  async function loadPokemons() {
    const response = await api.get('api/v2/pokemon/?offset=151&limit=302');
    setPokemons(response.data);

    console.log(response.data);
  }

  return(
    <Container>
      <Header 
        title="Pokédex"
      />
    </Container>
  )
}