//import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SlActionUndo, SlPeople } from 'react-icons/sl'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 428px;
  height: 80px;
  background: #f0f0f0;
`
export const IconReturn = styled(SlActionUndo)`
  width: 30px;
  height: 30px;
  background: #f0f0f0;
  color: #5ef65a;
  margin: 10px;
  cursor: pointer;
`
export const ReturnHome = styled.div`
  color: #000;
  text-align: right;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: #000;
  text-decoration: underline;
`
export const ImageAvatar = styled.img`
  display: flex;
  max-width: 73%;
  height: auto;
  position: absolute;
  right: 50px;
  bottom: 300px;
`
export const FormContainer = styled.main`
  display: grid;
  position: absolute;
  align-items: center;
  width: 270px;
  height: 200px;
  right: 50px;
  bottom: 70px;
  padding: 10px;
  border-radius: 15%;
  background: #ffff;
`

export const FormInput = styled.input`
  border: none;
  background-color: none;
  text-decoration: underline #9dc180;
  width: 80%;
  height: auto;
  right: auto;
  margin: 5px 0;

  &::placeholder {
    color: #000;
    padding: 8px;
    font-family: Roboto Slab;
    font-size: 18px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
  }
`
export const User = styled(SlPeople)`
  width: 30px;
  height: 30px;
  background: none;
  color: #5ef65a;
  margin: 5px;
  cursor: pointer;
`
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
`
