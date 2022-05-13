import { Container, Logo, LogoContainer, MenuContainer } from "./styles";

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <MenuContainer>
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </MenuContainer>
    </Container>
  );
};

export default Header;
