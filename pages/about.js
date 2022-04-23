import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";

import { Container } from "../styles/styles";

export default function About() {
  return (
    <>
      <Header />
      <Container>
        <h1>Pagina sobre</h1>
        <Menu page="about"/>
      </Container>
    </>
  );
}