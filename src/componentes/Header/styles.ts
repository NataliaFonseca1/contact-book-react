import { styled } from 'styled-components'

export const Titulo = styled.h1`
  padding: 20px;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
`
export const Input = styled.input`
  display: flow-root;
  max-width: 100%;
  max-height: 25%;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  border: #9dc180;
  color: #ffff;
  background-color: #9dc180;
  box-sizing: border-box;

  padding: 5px;
  &::placeholder {
    color: #ffff;
    padding: 8px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  padding: 8px;
`
export const SearchIconContainer = styled.button`
  margin-right: 8px;
  padding: 5px;
  color: #9dc180;
  font-weight: bold;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`
export const ListTitle = styled.h2`
  margin-left: 10%;
  padding: 20px;
  width: 100%;
  font-size: 25px;
  font-weight: initial;
`
export const Contatos = styled.h2`
  margin-left: 10%;
  padding: 20px;
  width: 100%;
  font-size: 15px;
  font-weight: initial;
`
