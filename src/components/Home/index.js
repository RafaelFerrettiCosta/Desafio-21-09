import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css'

export const Home = () => {
  const [personagens, setPersonagens] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
  })

  useEffect(() => {
    buscarPersonagem();
  });

  async function buscarPersonagem() {
    const response = await api.get('/pokemon/?offset=0&limit=20');
    const resultados = response.data.results;

    const loadPokemons = await Promise.all(
      resultados.map(async (pokemon) => {
        const { id, types, sprites } = await getMoreInfo(pokemon.url)
        return {
          name: pokemon.name,
          id,
          types,
          sprites
        }
      })
    )
    setPersonagens(loadPokemons)
  }

  async function getMoreInfo(url) {
    const response = await api.get(url)
    const { id, types, sprites } = response.data;
    return {
      id, types, sprites
    }
  }

  const pesquisar = (e) => {
    setPesquisa(e.target.value)
    console.log(pesquisa, "t");
  }

  return (
    <div>
      <input
        className="search"
        placeholder="Digite um nome"
        onChange={pesquisar}
      />
      {
        personagens.map((personagem) =>
          <>
            {
              pesquisa.toUpperCase() === '' || personagem.name.toUpperCase().includes(pesquisa.toUpperCase())
                ?
                <ul>
                  <li>
                    <img src={personagem.sprites.front_default} />
                  </li>
                  <li>{personagem.name}</li>
                  <li>{personagem.id}</li>
                  {
                    personagem.types.map(obj =>
                      <li>{obj.type.name}</li>
                    )}
                </ul>
                :
                null
            }


          </>
        )
      }
    </div >
  );
}
