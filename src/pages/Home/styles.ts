import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: url("images/background.jpg") no-repeat 700px bottom;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  padding-bottom: 1rem;
  text-align: center;
  max-width: 50%;
`;

export const SubTitle = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;
  text-align: center;
  max-width: 50%;
`;

export const ButtonBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  height: 5vh;
  width: 4vw;
  font-size: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
