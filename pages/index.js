import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import { Container } from "../styles/styles";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Menu page="home"/>
      </Container>
    </>
  );
}
