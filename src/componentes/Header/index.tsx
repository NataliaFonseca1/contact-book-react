import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { searchTerm } from './../../store/reducers/Filter'

const HeaderComponent = ({
  setSearchActive,
  totalContatos
}: {
  setSearchActive: (active: boolean) => void
  totalContatos: number
}) => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const handleInputChange = (e) => {
    const searchTermValue = e.target.value.toLowerCase()
    setSearch(searchTermValue)
    dispatch(searchTerm(searchTermValue))
    setSearchActive(true)
  }
  return (
    <>
      <div>
        <S.Titulo>Contact Book</S.Titulo>
        <S.SearchContainer>
          <S.Input
            type="text"
            placeholder="Search Contacts"
            value={search}
            onChange={handleInputChange}
          />

          <S.SearchIconContainer onClick={handleInputChange}>
            <FontAwesomeIcon icon={faSearch} />
          </S.SearchIconContainer>
        </S.SearchContainer>
        <S.Contatos>Você possui {totalContatos} cadastrados</S.Contatos>
        <S.ListTitle>Meus Contatos</S.ListTitle>
      </div>
    </>
  )
}

export default HeaderComponent
