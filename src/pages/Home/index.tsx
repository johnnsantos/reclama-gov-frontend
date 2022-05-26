import {
  Image,
  Button,
  ButtonBox,
  Container,
  LeftContainer,
  RightContainer,
  SubTitle,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Home: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <Title>Solicite serviços para a Prefeitura</Title>
        <SubTitle>Aponte as necessidades de melhoria na sua região</SubTitle>
        <Link to="/new">
          <Button>
            <ButtonBox>
              <BsFillPlusCircleFill />
            </ButtonBox>
            Cadastre um ponto de melhoria
          </Button>
        </Link>
        <Link to="/requirements">Ver pontos de melhoria cadastrados</Link>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default Home;
