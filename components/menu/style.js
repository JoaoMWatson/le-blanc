import styled from 'styled-components'
import { colors, devices } from '../../styles/variables'

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  margin-right:1%;
  width:100%;
`

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  margin-left: 1.6rem;
  color: ${props => props.inPage ? colors.text.primary : colors.text.secondary};
  font-weight: ${props => props.inPage ? 'bold' : 'normal'};
  border-bottom: ${props => props.inPage ? "3px solid" + colors.contrast : "none"};
  padding-bottom: 0.3rem
`

export {
  MenuContainer,
  StyledLink
}