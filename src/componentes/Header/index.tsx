import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { ChangeEvent, useState } from 'react'
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

  const handleSearch = () => {
    const searchTermValue = search
    dispatch(searchTerm(searchTermValue))
    setSearchActive(true)
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTermValue = e.target.value
    setSearch(searchTermValue)
    handleSearch()
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

          <S.SearchIconContainer>
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
