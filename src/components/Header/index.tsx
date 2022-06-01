import { Link } from "react-router-dom";
import {
  Container,
  Logo,
  LogoContainer,
  MenuContainer,
  StyledLink,
} from "./styles";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Link to="/">
          <Logo />
        </Link>
      </LogoContainer>
      <MenuContainer>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Sobre</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Contato</StyledLink>
            </li>
          </ul>
        </nav>
      </MenuContainer>
    </Container>
  );
};

export default Header;
