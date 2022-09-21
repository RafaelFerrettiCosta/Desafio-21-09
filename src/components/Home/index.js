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
    <div className='content-holder'>
      <div className='search-holder'>
      <input
        placeholder="Digite um nome"
        onChange={pesquisar}
      />
      </div>
    <div className='table-holder'>

      {
        personagens.map((personagem) =>
          <>
            {
              pesquisa.toUpperCase() === '' || personagem.name.toUpperCase().includes(pesquisa.toUpperCase())
                ?
                <ul>
                  <div>
                    <li id='id'><span>{personagem.id}</span></li>
                    <li id='name'><span>{personagem.name}</span></li>
                    <div className='type-holder'>
                      {
                        personagem.types.map(obj =>
                          <li className='type'><span>{obj.type.name}</span></li>
                        )}
                    </div>
                  </div>
                  <li>
                    <img src={personagem.sprites.front_default} />
                  </li>
                </ul>
                :
                null
            }
          </>
        )
      }
    </div >
    </div>
  );
}
