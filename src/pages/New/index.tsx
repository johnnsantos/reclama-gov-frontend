import Input from "../../components/Input";
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";

const New: React.FC = () => {
  return (
    <Container>
      <Form>
        <FormTitle>Cadastro do comércio local</FormTitle>
        <Section>Dados</Section>
        <Input />
      </Form>
    </Container>
  );
};

export default New;
