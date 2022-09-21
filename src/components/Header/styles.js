import styled from 'styled-components'
import topBackground from '../../assets/top-pokedex.png'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    background-image: url(${topBackground});
    background-position: center;
    background-size: 100%;
    position: fixed;
    top: 0;
    left: 0;
`

export const PokeballImage = styled.img`
    width: 60px;
    height: 60px;
    position: relative;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`