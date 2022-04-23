import React from "react";
import Header from "../components/header";
import Menu from "../components/menu";

import { Container, Paragraph } from "../styles/styles";

export default function About() {
  return (
    <>
      <Header />
      <Container>
        <Menu page="about" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ultricies nisl, sed venenatis ligula tincidunt at. Phasellus
          non turpis libero. Sed ornare tristique leo, quis venenatis ligula
          iaculis ut. In hac habitasse platea dictumst. Donec porttitor nibh a
          mi dignissim, ac condimentum massa tempor. Integer vitae dignissim
          felis. Nunc quis eros est. Nunc tempor cursus molestie. Ut vel mauris
          lectus. Fusce non ante elit. Sed tristique lorem eu lobortis lacinia.
          Duis imperdiet ac lacus at gravida. Morbi eget lacinia nisi,
          pellentesque venenatis sapien. Mauris non elit id metus scelerisque
          lacinia. Integer velit risus, iaculis sed l uctus vel, tempor eget
          massa. Fusce gravida augue eros, sed facilisis orci aliquet a.
          Suspendisse potenti. Vivamus ac nisi elit. Proin varius vulputate
          suscipit. Sed a accumsan velit, quis commodo mi.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          elementum ultricies nisl, sed venenatis ligula tincidunt at. Phasellus
          non turpis libero. Sed ornare tristique leo, quis venenatis ligula
          iaculis ut. In hac habitasse platea dictumst. Donec porttitor nibh a
          mi dignissim, ac condimentum massa tempor. Integer vitae dignissim
          felis. Nunc quis eros est. Nunc tempor cursus molestie. Ut vel mauris
          lectus. Fusce non ante elit. Sed tristique lorem eu lobortis lacinia.
          Duis imperdiet ac lacus at gravida. Morbi eget lacinia nisi,
          pellentesque venenatis sapien. Mauris non elit id metus scelerisque
          lacinia. Integer velit risus, iaculis sed l uctus vel, tempor eget
          massa. Fusce gravida augue eros, sed facilisis orci aliquet a.
          Suspendisse potenti. Vivamus ac nisi elit. Proin varius vulputate
          suscipit. Sed a accumsan velit, quis commodo mi.
        </Paragraph>
      </Container>
    </>
  );
}
