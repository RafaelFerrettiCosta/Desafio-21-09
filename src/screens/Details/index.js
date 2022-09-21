import React from "react";

import pokebalImage from '../../assets/pokeball-png.png';

import { Container } from "./styles";

export default function Details() {
  return(
    <Container>
      <PokeballImage src={pokebalImage} />
      
    </Container>
  );
}