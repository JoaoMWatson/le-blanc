import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import { ContactInput, TextAreaInput, SendButton } from "../components/input";

import { Container, InputContainer } from "../styles/styles";

export default function Contact() {
  return (
    <>
      <Header />
      <Container>
        <Menu page="contact" />
        <InputContainer>
          <ContactInput placeholder="Nome" type="text" />
          <ContactInput placeholder="Email" type="email" />
          <TextAreaInput placeholder="Mensagem" />
          <SendButton text="Enviar"/>
        </InputContainer>
      </Container>
    </>
  );
}
