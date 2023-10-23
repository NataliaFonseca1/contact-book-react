//import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  background-color: #9dc180;
  color: #ffff;
  border-radius: 50%;
  border: 1px solid transparent;
  font-size: 40px;
  text-decoration: none;
  right: 20px;
  bottom: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`
