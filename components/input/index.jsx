import { Input, TextArea, Button } from "./style";

export const ContactInput = (props) => {
  return <Input placeholder={props.placeholder} type={props.type} />;
};

export const TextAreaInput = (props) => {
  return (
    <TextArea placeholder={props.placeholder} rows="4" cols="50">
      
    </TextArea>
  );
};

export const SendButton = (props) => {
  return (
    <Button type="reset">
      {props.text}
    </Button>
  );
};

