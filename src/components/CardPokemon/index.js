import React, { useState, useEffect } from "react";

import api from "../../services/api";

import { Container } from './styles';

export default function CardPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  async function loadPokemons() {
    const response = await api.get('api/v2/pokemon/?offset=151&limit=302');
    setPokemons(response.data);
    console.log(response.data);
  };

  return (
    <Container>

    </Container>
  );
}