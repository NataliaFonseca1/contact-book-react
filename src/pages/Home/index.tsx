import * as S from './styles'
import BotaoCadastro from '../../componentes/BotaoCadastro'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store/index'
import ContactCard from '../../componentes/ContactCard'
import HeaderComponent from '../../componentes/Header'
import { useState } from 'react'

const Home = () => {
  const contato = useSelector((state: RootReducer) => state.dados.items)
  const termo = useSelector((state: RootReducer) => state.filter.term)
  const [searchActive, setSearchActive] = useState(false)

  const handleSearchActive = () => {
    if (termo !== undefined && termo.trim() !== '') {
      setSearchActive(true)
    } else {
      setSearchActive(false)
    }
  }
  const totalContatos = contato.length
  return (
    <>
      <div>
        <HeaderComponent
          setSearchActive={handleSearchActive}
          totalContatos={totalContatos}
        />
        <S.ListMainContainer>
          {searchActive ? (
            <ul>
              {contato
                .filter((contato) => {
                  return (
                    contato.name.includes(termo) ||
                    contato.phone.includes(termo) ||
                    contato.email.includes(termo)
                  )
                })
                .map((contato) => (
                  <ContactCard
                    key={contato.id}
                    id={contato.id}
                    name={contato.name}
                    phone={contato.phone}
                    email={contato.email}
                  />
                ))}
            </ul>
          ) : (
            <ul>
              {contato.map((contato) => (
                <ContactCard
                  key={contato.id}
                  id={contato.id}
                  name={contato.name}
                  phone={contato.phone}
                  email={contato.email}
                />
              ))}
            </ul>
          )}
        </S.ListMainContainer>
        <BotaoCadastro />
      </div>
    </>
  )
}

export default Home
