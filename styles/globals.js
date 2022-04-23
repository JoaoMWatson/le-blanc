import { createGlobalStyle } from "styled-components";
import { colors, devices, fonts } from "./variables"

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Saira', sans-serif;
    background-color: ${colors.primary};
  }
`;