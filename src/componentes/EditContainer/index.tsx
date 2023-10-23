import { BotaoRemover, BotaoAtualizar } from '../../styles/styles'

import * as S from './styles'
import { IconReturn } from './styles'

const EditContainer = () => {
  return (
    <>
      <S.HeaderContainer>
        <S.StyledLink to="/">
          <IconReturn />
          <S.ReturnHome>return</S.ReturnHome>
        </S.StyledLink>

        <BotaoAtualizar>update</BotaoAtualizar>
        <S.ImageAvatar src="/avatar.png" alt="avatar"></S.ImageAvatar>
        <S.FormContainer>
          <div>
            <S.User />
            <S.FormInput type="text" placeholder="Insira seu nome" />
          </div>
          <div>
            <S.User />
            <S.FormInput type="tel" placeholder="Insira seu Telefone" />
          </div>
          <div>
            <S.User />
            <S.FormInput type="text" placeholder="Insira seu Email" />
          </div>
        </S.FormContainer>
      </S.HeaderContainer>
      <div>
        <BotaoRemover>remove</BotaoRemover>
      </div>
    </>
  )
}

export default EditContainer
