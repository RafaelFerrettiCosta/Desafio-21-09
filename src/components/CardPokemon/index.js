import React, { useState, useEffect } from "react";

import api from '../../Services/api'

import { Container, Card, CardHeader, CardDetails, PokemonType, PokemonImage } from './styles.js'

import { Link } from "react-router-dom";
import { usePokemons } from "../../context/pokemonsContext";

  export default function CardPokemon({ pokemons }) {
    const [cardPokemons, setCardPokemons] = useState([]);
    const { state } = usePokemons()

  async function loadPokemons() {
    const response = await api.get('?offset=151&limit=300');
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

      setCardPokemons(oldPokemonsList => [...oldPokemonsList, pokemonData])
    }
  };

  const pokemonsFiltered = state ? cardPokemons.filter(pokemonName => {
    return pokemonName.name.toLowerCase().includes(state.toLowerCase())
  }) : cardPokemons

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <Container>

      {pokemonsFiltered.map(pokemon => (
        <Card pokemonType={pokemon.types[0].name}>
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