import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";

import { Container } from "../styles/styles";

export default function Contact() {
  return (
    <>
      <Header/>
      <Container>
        <h1>Pagina de contato</h1>
        <Menu page="contact"/>
      </Container>
    </>
  );
}