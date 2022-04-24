import { FiPaperclip } from "react-icons/fi";
import {
  CardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  Divider,
} from "./style";
import data from "../../pages/api/products.json";

const Card = (props) => {
  const filteredData = data.products.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.productName.toLowerCase().includes(props.input);
    }
  });
  return (
    <>
      {filteredData.map((item) => (
        <>
          <CardContainer>
            <ProductImage src={item.image} />
            <ProductName>{item.productName}</ProductName>
            <Divider />
            <ProductPrice>{item.productPrice}</ProductPrice>
          </CardContainer>
        </>
      ))}
    </>
  );
};

export default Card;
