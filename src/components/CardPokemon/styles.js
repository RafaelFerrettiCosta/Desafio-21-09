import styled from "styled-components";

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
    background-color: #ccc;
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

`

export const PokemonType = styled.div``

export const PokemonImage = styled.img``
