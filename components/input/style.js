import styled from 'styled-components'
import { colors, devices, fonts } from '../../styles/variables'

const Input = styled.input`
  font-size: 1rem;
  width: 20rem;
  height: 3rem;
  padding-left: 1rem;
  background-color: #ebeff0;
  border: 0.5px solid #8fa6a6;
  margin-top: 2%;
  border-radius: 5px;
  ::placeholder {
    color: ${colors.text.secondary};
  }
`

const TextArea = styled.textarea`
  font-size: 1rem;
  width: 50rem;
  height: 10rem;
  padding-left: 1rem;
  padding-top:1rem;
  background-color: #ebeff0;
  margin-top: 3.4%;
  border: none;
  border: 0.5px solid #8fa6a6;
  border-radius: 5px;
  ::placeholder {
    color: ${colors.text.secondary};
  }
  
`

const Button = styled.button`
  margin-top:2%;
  font-size: 1rem;
  width: 7rem;
  height: 2rem;
  background: #EC805A;
  font-weight: bold;
  border:  none;
  border-radius: 4px;
  :hover{
    background: #bd6648;
    cursor: pointer;
  }
`

export {
  Input,
  TextArea,
  Button
}