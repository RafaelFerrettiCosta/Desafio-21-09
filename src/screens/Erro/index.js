import React from "react";

import Logo from '../../assets/pikachu-erro.jpeg'

export default function Erro() {
  return(
    <Container>
      <Title>Não encontramos informação para esse pokemon</Title>

      <img src={Logo} />
    </Container>
  );
}