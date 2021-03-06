import styled from "styled-components";
import { MapContainer as MapContainerLeaflet } from "react-leaflet";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  width: 40vw;
  background-color: ${(props) => props.theme.colors.white};
  padding: 50px;
  margin-top: 40px;
  border-radius: 8px;

  @media (max-width: 1024px) {
    width: 70vw;
  }
`;

export const FormTitle = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 40px;
  padding-bottom: 30px;
  font-weight: 600;
`;

export const MapContainer = styled(MapContainerLeaflet)`
  height: 50vh;
`;

export const Section = styled.p`
  color: ${(props) => props.theme.colors.primary};
  font-size: 20px;

  padding-bottom: 30px;
  padding-top: 30px;
  font-weight: 700;
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const CategoryBox = styled.div<{ isActive: boolean }>`
  background-color: ${(props) =>
    props.isActive ? props.theme.white : props.theme.colors.background};
  border: ${(props) =>
    props.isActive ? `2px solid ${props.theme.colors.background}` : "none"};
  box-sizing: border-box;
  border-radius: 8px;
  width: 160px;
  height: 160px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 10px;

  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    transition: all 0.2s ease-in-out;
  }
`;

export const CategoryImage = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding-top: 20px;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  /* position: relative; */

  &:hover {
    filter: opacity(0.9);
    padding-top: 6px;
    transition: all 0.2s ease-in-out;
  }
`;
