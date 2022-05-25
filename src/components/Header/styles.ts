import React from "react";
import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 5vh;
  padding-top: 25px;
`;

export const LogoContainer = styled.div`
  padding: 80px;
  width: 100%;
`;

export const Logo = styled.img.attrs(() => ({
  src: "logo.png",
}))`
  width: 150px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  ul {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    li {
      margin: 0 20px;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    transition: color 0.2s;
  }
`;
