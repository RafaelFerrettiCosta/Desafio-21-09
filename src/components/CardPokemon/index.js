import React, { useState, useEffect } from "react";

import api from '../../services/api'

import { Container, Card, CardHeader, CardDetails, PokemonType, PokemonImage } from './styles.js'

import { Link } from "react-router-dom";

export default function CardPokemon() {
  const [pokemons, setPokemons] = useState([]);

  async function loadPokemons() {
    const response = await api.get('?offset=151&limit=5');
    const data = response.data.results

    for (let pokemonName of data) {
      const response = await api.get(pokemonName.name)
      const data = response.data
      const pokemonData = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map(pokemonType => ({
          name: pokemonType.type.name
        }))
      }

      setPokemons(oldPokemonsList => [...oldPokemonsList, pokemonData])
    }
  };

  console.log(pokemons);

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>
      {pokemons && pokemons.map(pokemon => (
        <Card>
          <CardHeader>
            <h2>{pokemon.name}</h2>
            <p>#{pokemon.id}</p>
          </CardHeader>

          <CardDetails>
            <PokemonType>
              {pokemon.types.map(pokemonType => (
                <p>{pokemonType.name}</p>
              ))}
            </PokemonType>
            <PokemonImage src={pokemon.image} />
          </CardDetails>
        </Card>
      ))}
    </Container>
  );
}