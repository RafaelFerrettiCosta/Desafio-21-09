import styled from "styled-components";

const typesColor = {
    grass: '#9bcc50',
    normal: "#a4acaf",

fighting: "#d56723",

flying: "#7ecdf7",

poison: "#6f55af",

ground: "#906727",

rock: "#a38c21",

bug: "#729f3f",

ghost: "#7b62a3",

steel: "#9eb7b8",

fire: "#fd7d24",

water: "#4592c4",

grass: "#9bcc50",

electric: "#eed535",

psychic: "#f355b9",

ice: "#51c4e7",

dragon: "#fc801e",

dark: "#707070",

fairy: "#fdb9e9",

unknown: "#666666",

shadow: "#3b3b3b"
}

export const Container = styled.div`
    padding-top: 300px;
    width: 100%;
    max-width: 1120px;
    margin: 0 auto 50px auto;

    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    width: 220px;
    height: 200px;
    background-color: ${props => typesColor[props.pokemonType]};
    border-radius: 30px;
    padding: 20px;
`;

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 17px;
        text-transform: capitalize;
       
    }
`

export const CardDetails = styled.div`
    display: flex;
`

export const PokemonType = styled.div``

export const PokemonImage = styled.img``
