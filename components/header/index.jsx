import { Container, Title, SearchContainer, SearchInput } from "./style";
import { FiShoppingBag } from "react-icons/fi";


const Header = () => {

  return (
    <Container>
      <Title>LeBlanc</Title>
      <SearchContainer>
        <SearchInput placeholder="Procurando por algo especifico" />
        <button style={{ background: "white", border:"none", cursor:"pointer"}}><FiShoppingBag size="1.5rem"/></button>
      </SearchContainer>
    </Container>
  );
};

export default Header;