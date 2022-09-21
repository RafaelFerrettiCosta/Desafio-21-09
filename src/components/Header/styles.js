import styled from 'styled-components';

export const Container = styled.div`

`;

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Input = styled.input`
  box-shadow: 0 3px 3px gray;
  border: 0;
  border-radius: 20px;
  padding: 14px;
  width: 400px;
  height: 20px;
  
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