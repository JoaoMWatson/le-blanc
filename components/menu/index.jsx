import { useState, useEffect } from "react";
import { MenuContainer, StyledLink } from "./style";
import Link from "next/link";

const Menu = (props) => {
  const [inPage, setInpage] = useState([true, false, false]);
  
  useEffect(() => {
    switch(props.page){
      case "home":
        setInpage([true, false, false])
        break;
      case "about":
        setInpage([false, true, false])
        break;
      case "contact":
        setInpage([false, false, true])
        break;
      default:
        setInpage([true, false, false])
    }
  }, [props.page])

  return (
    <MenuContainer>
      <Link href="/" passHref>
        <StyledLink
          inPage={inPage[0]}
        >
          Produtos
        </StyledLink>
      </Link>
      <Link href="/about" passHref>
        <StyledLink
          inPage={inPage[1]} 
        >
          Sobre Nós
        </StyledLink>
      </Link>
      <Link href="/contact" passHref>
        <StyledLink
          inPage={inPage[2]}
        >
          Contato
        </StyledLink>
      </Link>
    </MenuContainer>
  );
};

export default Menu;
