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
        <Title>Conheça os negócios locais da sua região</Title>
        <SubTitle>Encontre no comércio local tudo o que precisa!</SubTitle>
        <Link to="/new">
          <Button>
            <ButtonBox>
              <BsFillPlusCircleFill />
            </ButtonBox>
            Quero cadastrar um comércio
          </Button>
        </Link>
      </LeftContainer>
      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
};

export default Home;
