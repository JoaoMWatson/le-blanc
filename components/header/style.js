import styled from 'styled-components'
import { colors, devices, fonts } from '../../styles/variables'


const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding-top: 2.6rem;
  padding-bottom: 1rem;
  background-color: ${colors.secondary};
`

const Title = styled.h1`
  font-family: ${fonts.title};
  color: #5D5D6D;
  font-size: 2.4rem;
  font-weight: bold;
`

const SearchContainer = styled.div`
  padding-right: 1rem;
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`

const SearchInput = styled.input`
  font-size: 1rem;
  width: 18rem;
  height: 2.5rem;
  padding-left: 1rem;
  background-color: #F3F5F6;
  border: none;
  border-radius: 0.5rem;
  ::placeholder {
    color: ${colors.text.secondary};
  }
`


export {
  Container,
  Title,
  SearchContainer,
  SearchInput
}