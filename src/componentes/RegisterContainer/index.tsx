import { useState } from 'react'
import ContactClass from '../../models'
import { BotaoSalvar } from '../../styles/styles'

import * as S from './styles'
import { IconReturn } from './styles'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { adicionar } from '../../store/reducers/ListContact'

const RegisterContainer = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(true)

  const validateEmail = (email: string) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    return regex.test(email)
  }
  const handlesave = () => {
    const id = Date.now()
    if (!validateEmail(email)) {
      setEmailValid(false)
      return
    }
    const newContact = new ContactClass(name, email, phone, id)
    dispatch(adicionar(newContact))
    navigate('/')
    setName('')
    setPhone('')
    setEmail('')
    setEmailValid(true)
  }
  return (
    <>
      <S.HeaderContainer>
        <S.StyledLink to="/">
          <IconReturn />
          <S.ReturnHome>return</S.ReturnHome>
        </S.StyledLink>

        <BotaoSalvar onClick={handlesave}>save</BotaoSalvar>
        <S.ImageAvatar src="/avatar.png" alt="avatar"></S.ImageAvatar>
        <S.FormContainer>
          <div>
            <S.User />
            <label htmlFor="name">
              <S.FormInput
                type="text"
                placeholder="Insira seu nome"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <S.User />
            <label htmlFor="phone">
              <S.MaskInput
                type="tel"
                mask="(99) 99999-9999"
                placeholder="Insira seu Telefone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <S.User />
            <label htmlFor="email">
              <S.FormInput
                type="text"
                placeholder="Insira seu Email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailValid(true)
                }}
              />
            </label>
          </div>
          <div>
            {!emailValid && (
              <S.Message>
                <>Email inválido. Por favor, insira um email válido.</>
              </S.Message>
            )}
          </div>
        </S.FormContainer>
      </S.HeaderContainer>
    </>
  )
}
export default RegisterContainer
