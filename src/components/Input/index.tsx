import { Container, InputStyled } from "./styles";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: Function;
  disabled?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <Container>
      <label htmlFor={props.name}>{props.label}</label>
      <InputStyled
        disabled={props.disabled}
        required
        name={props.name}
        value={props.value}
        onChange={(ev) => {
          props.onChange((prev: any) => ({
            ...prev,
            [props.name]: ev.target.value,
          }));
        }}
      />
    </Container>
  );
};

export default Input;
