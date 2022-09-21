import React, { useState, useEffect } from "react";

import api from '../../services/api'

import { Container, Card, CardHeader, CardDetails, PokemonType, PokemonImage } from './styles.js'

import { Link } from "react-router-dom";

export default function CardPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    loadPokemons();
  }, []);

  async function loadPokemons() {
    const response = await api.get('?offset=151&limit=302');
    setPokemons(response.data);
    console.log(response.data);
  };

  return (
    <Container>
      {pokemons.results && pokemons.results.map((pokemon) => (
        <Card>
          <CardHeader>
            <h2>{pokemon.name}</h2>
            <p>#001</p>
          </CardHeader>

          <CardDetails>
            <PokemonType>

            </PokemonType>
            <PokemonImage />
          </CardDetails>

          {/* <Link to={`/pokemon/${pokemon.id}`}>Detalhes</Link>*/}
        </Card>
      ))}
    </Container>
  );
}