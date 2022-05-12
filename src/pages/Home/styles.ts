import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("./home-background.svg") no-repeat 700px bottom;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  padding-bottom: 40px;
  text-align: center;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  padding-bottom: 40px;
  text-align: center;
  max-width: 400px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const ButtonBox = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  height: 50px;
  width: 50px;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  height: 50px;
  border: none;
  border-radius: 5px;
  position: relative;
  padding: 10px 10px 10px 60px;

  &:hover {
    bottom: 1px;
    filter: opacity(0.9);
    transition: all 0.3s ease-in-out;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: "home-image.svg",
}))`
  width: 60%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
