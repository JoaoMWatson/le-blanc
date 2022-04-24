import styled from 'styled-components'
import { colors, devices, fonts } from '../../styles/variables'

const CardContainer = styled.div`
  width: 18rem;
  height: 0%;
  border-radius: 4px 4px 4px 4px;
  padding-bottom: 1%;
  background-color: ${colors.secondary};
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  gap: 0.6em;
`

const ProductImage = styled.img`
  width: 100%;
  height: 20%;
  border-radius: 4px 4px 0 0;
  border-bottom:2px solid #DCE2E6;
`

const ProductName = styled.h2`
  color: #41414D;
  font-size: 1rem;
  margin-left: 4%;
  font-weight: 100;
  padding-top:3%;
`

const ProductPrice = styled.p`
  color: #09090A;
  font-weight: bold;
  font-size: 0.8rem;
  margin-left: 4%;

`

const Divider = styled.hr`
  width: 90%;
  color: #DCE2E6;
  border-style: inset;
  border-width: 1px;
`

export {
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  Divider
}