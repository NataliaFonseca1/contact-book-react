import { styled } from 'styled-components'
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsCheckSquareFill,
  BsFillXSquareFill
} from 'react-icons/bs'

export const ListMainContainer = styled.main`
  position: relative;
  margin-top: 20px;
  width: 100%;
  max-width: 800px;
  max-height: 300px;
  margin: 0 auto;
  padding: 20px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #9dc180;
  border-radius: 15px;
`

export const Contact = styled.div`
  font-weight: normal;
  margin: 0 auto;
  flex-grow: 1;
  padding: 12px;
`
export const InfoContainer = styled.div`
  display: grid;
  align-items: center;
  max-width: 100%;
`

export const EditContainer = styled.div`
  display: grid;
  background-color: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`
export const EditIcon = styled(BsFillPencilFill)`
  margin: auto;
  padding: 5px;
  color: green;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`
export const SaveIcon = styled(BsCheckSquareFill)`
  margin: auto;
  padding: 5px;
  color: green;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`

export const DeletIcon = styled(BsFillTrashFill)`
  margin: auto;
  padding: 5px;
  color: red;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`

export const CancelIcon = styled(BsFillXSquareFill)`
  margin: auto;
  padding: 5px;
  color: red;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  border: transparent;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`
