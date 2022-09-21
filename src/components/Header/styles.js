import styled from 'styled-components';

import topBackground from '../../assets/top-pokedex.png'

export const Container = styled.header`
    width: 100%;
    height: 80px;
    background-image: url(${topBackground});
    background-position: center;
    background-size: 100%;
    position: fixed;
    top: 0;
    left: 0;
`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFF;
  padding: 30px 60px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  -webkit-box-shadow: -1px 5px 11px 1px rgba(0,0,0,0.33); 
  box-shadow: -1px 5px 11px 1px rgba(0,0,0,0.33);
`;

export const Input = styled.input`
  box-shadow: 0 3px 3px gray;
  border: 0;
  border-radius: 20px;
  padding: 14px;
  width: 400px;
  height: 36px;
  
  &:focus {
    border: 0;
    outline: 0;
  }

  &::before {
    content: '';
    position: absolute;
    z-index: 999;
  }
`;

export const Title = styled.h1`
  padding-top: 26px;
`;

export const PokeballImage = styled.img`
    width: 60px;
    height: 60px;
    position: relative;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
`;