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

  const handlesave = () => {
    const id = Date.now()
    const newContact = new ContactClass(name, email, phone, id)
    dispatch(adicionar(newContact))
    navigate('/')
    setName('')
    setPhone('')
    setEmail('')
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
            <label htmlFor={name}>
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
            <label htmlFor={phone}>
              <S.FormInput
                type="tel"
                placeholder="Insira seu Telefone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <S.User />
            <label htmlFor={email}>
              <S.FormInput
                type="text"
                placeholder="Insira seu Email"
                id={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </S.FormContainer>
      </S.HeaderContainer>
    </>
  )
}
export default RegisterContainer
