import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
*{

  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-family: 'Roboto Mono', monospace;
  list-style: none;

}
`
export const Container = styled.div`
  display: flex;
  width: 25%;
  height: 80%;
  margin-left: 35%;
  margin-top: 5vh;
  background-color: #f0f0f0;
  position: absolute;

  @media (max-width: 768px) {
    width: 100%;
    height: 130vh;
    margin-left: 0;
    margin-top: 0;
    background-color: #ffff;
  }
  @media (min-width: 768px) and (max-width: 768px) {
    width: 50%;
    height: 60vh;
    margin-left: 25%;
    margin-top: 0;
    background-color: #ffff;
  }
  @media (min-width: 820px) and (max-width: 1180px) {
    width: 50%;
    height: 105vh;
    margin-left: 25%;
    margin-top: 0;
    background-color: #ffff;
  }
`

export const Botao = styled.button`
  border: none;
  text-align: right;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
`
export const BotaoSalvar = styled(Botao)`
  color: #5af686;
  margin: 15px;
  font-size: 30px;
  cursor: pointer;
`
export const BotaoAtualizar = styled(Botao)`
  color: #5af686;
  margin: 15px;
  font-size: 30px;
  cursor: pointer;
`
export const BotaoRemover = styled(Botao)`
  color: #f30c0c;
  margin: 15px;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  position: absolute;
  align-items: center;
  width: 10px;
  height: 10px;
  right: 200px;
  bottom: 8px;
  padding: 2px;
`

export default EstiloGlobal
