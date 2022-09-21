import React, { useState, useEffect } from "react";

import api from "../../Services/api";

export default function CardPokemon() {
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
    <div>

    </div>
  )
}