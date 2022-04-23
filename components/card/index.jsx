import { FiPaperclip } from "react-icons/fi";
import {
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  Divider
} from "./style";


const Card = (props) => {
  return (
    <CardContainer>
      <ProductImage src={props.image} />
        <ProductName>{props.productName}</ProductName>
        <Divider /> 
        <ProductPrice>{props.productPrice}</ProductPrice> 
    </CardContainer>
  );
};

export default Card;
