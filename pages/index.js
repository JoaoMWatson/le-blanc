import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";
import Card from "../components/card";
import { Container, CardGrid } from "../styles/styles";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <Menu page="home"/>
        <CardGrid>
          <Card 
            productName="Quadro comemorativo"
            productPrice="R$ 44,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy13_18b8e66b-2466-4c4f-95ee-c44ebbba4406_360x.png?v=1631228469"
          />
          <Card 
            productName="Camiseta Persona 5"
            productPrice="R$ 70,00"
            image="https://resize.cdn.otakumode.com/exq/65/500.500/shop/product/98145fd6e4954b5286fcfdd4985cc255.jpg"
          />
          <Card 
            productName="Camiseta Take your hearth"
            productPrice="R$ 65,00"
            image="https://resize.cdn.otakumode.com/full/shop/product/98145fd6e4954b5286fcfdd4985cc255.jpg"
          />
          <Card 
            productName="Almofada 25th"
            productPrice="R$ 85,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy_360x.png?v=1630458698"
          />
          <Card 
            productName="Caderno Protagonistas 25th"
            productPrice="R$ 44,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy18_360x.png?v=1630635312"
          />
          <Card 
            productName="Capa celular"
            productPrice="R$ 23,99"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/iphone-case-iphone-11-case-with-phone-617111df4a6af_360x.jpg?v=1634800102"
          />
          <Card 
            productName="Garrafinha termica de 25th"
            productPrice="R$ 85,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/d3361716170da5df146b68fa01ecacfe_720x.jpg?v=1635379227"
          />
          <Card 
            productName="Short Comemorativo"
            productPrice="R$ 160,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copia2_720x.jpg?v=1635485926"
          />
          <Card 
            productName="Mouse Pad Persona 5"
            productPrice="R$ 35,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard1copy7_720x.jpg?v=1635484644"
          />
          <Card 
            productName="Camiseta protagonistas"
            productPrice="R$ 165,99"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy7_79769c3e-c3cf-4da7-b805-0092e2185834_720x.png?v=1640802316"
          />
          <Card 
            productName="Blusa protagonistas"
            productPrice="R$ 44,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy16_7458181d-dfc8-42f7-9817-843692d8d652_720x.png?v=1640801893"
          />
          <Card 
            productName="Mascara 25th"
            productPrice="R$ 15,00"
            image="https://cdn.shopify.com/s/files/1/0582/7896/9516/products/Artboard2copy29_04b71711-0c7b-4e66-9ae0-1b6399c5089b_360x.png?v=1630636377"
          />
        </CardGrid>
      </Container>
    </>
  );
}
