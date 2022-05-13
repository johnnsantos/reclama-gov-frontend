import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;

export const InputStyled = styled.input`
  margin-top: 10px;
  border: none;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  border-radius: 5px;
  padding: 10px;
`;
