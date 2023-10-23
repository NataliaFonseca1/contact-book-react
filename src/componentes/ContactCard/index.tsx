import { useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remover, atualizar } from '../../store/reducers/ListContact'
import ContactClass from '../../models'

const ContactCard = ({
  id,
  name,
  phone,
  email
}: {
  id: number
  name: string
  phone: string
  email: string
}) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [Nome, setNome] = useState(name)
  const [Telefone, setTelefone] = useState(phone)
  const [Email, setEmail] = useState(email)

  const handleEdit = () => {
    setEstaEditando(true)
  }

  const cancelEdit = () => {
    setEstaEditando(false)
    setNome(name)
    setTelefone(phone)
    setEmail(email)
  }

  const saveEdit = () => {
    const updatecontact = new ContactClass(Nome, Telefone, Email, id)
    dispatch(atualizar(updatecontact))
    setEstaEditando(false)
  }

  return (
    <li key={id}>
      <S.ContactInfo>
        <S.InfoContainer>
          {estaEditando ? (
            <>
              <input
                type="text"
                value={Nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <input
                type="text"
                value={Telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              <input
                type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          ) : (
            <>
              <S.Contact>{name}</S.Contact>
              <S.Contact>{phone}</S.Contact>
              <S.Contact>{email}</S.Contact>
            </>
          )}
        </S.InfoContainer>
        <S.EditContainer>
          {estaEditando ? (
            <>
              <S.SaveIcon onClick={saveEdit} />
              <S.CancelIcon onClick={cancelEdit} />
            </>
          ) : (
            <>
              <S.EditIcon onClick={handleEdit} />
              <S.DeletIcon onClick={() => dispatch(remover(id))} />
            </>
          )}
        </S.EditContainer>
      </S.ContactInfo>
    </li>
  )
}

export default ContactCard
