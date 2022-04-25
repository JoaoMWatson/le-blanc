import React from "react";
import products from "./api/products.json";
import Menu from "../components/menu";
import Card from "../components/card";
import Header from "../components/header";
import { Container, CardGrid } from "../styles/styles";
import data from "./api/products.json"
import { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState("");

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setUserInput(lowerCase);
  };

  return (
    <>
      <Header onChange={inputHandler} />
      <Container>
        <Menu page="home"/>
        <CardGrid>
          <Card
            key={data.products.id}
            input={userInput}
          />
        </CardGrid>
      </Container>
    </>
  );
}
