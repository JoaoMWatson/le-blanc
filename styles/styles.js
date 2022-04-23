import styled from "styled-components";
import { colors, devices, fonts } from "./variables";

const Container = styled.div`
  width: 68%;
  height: auto;
  margin-top: 2%;
  margin-left: 17%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const CardGrid = styled.div`
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  gap: 3rem;
  padding-bottom: 10%;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  margin-top: 5%;
  margin-left: 1.5%;
  text-align: justify;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-left:3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
`;

export { Container, CardGrid, Paragraph, InputContainer };
