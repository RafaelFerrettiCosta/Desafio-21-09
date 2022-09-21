import React, { useEffect, useState } from "react";
import { PokemonInfos } from "../api/pokemon";

const SinglePokemon = ({ url, name }) => {
  const [pokemonStatus, setPokemonStatus] = useState({
    img: "",
  });

  const pokemoInfos = async () => {
    const payloadInfos = await PokemonInfos.GetMoreInfos(url);

    if (payloadInfos) {
      setPokemonStatus(payloadInfos.data.sprites);
    }
  };

  useEffect(() => {
    pokemoInfos();
  }, [])

  console.log(pokemonStatus)

  return (
    <div>{name}</div>
  )
};

export default SinglePokemon;
