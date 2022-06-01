import styled from "styled-components";
import { MapContainer as MapContainerLeaflet } from "react-leaflet";

export const MapContainer = styled(MapContainerLeaflet)`
  height: calc(100vh - 9vh);
  overflow: hidden;
  .leaflet-div-icon {
    background: transparent;
    border: none;
  }
`;

interface MarkerProps {
  url: string;
}

export const CustomMarker = styled.div<MarkerProps>`
  background: lightgreen url(${(props) => props.url}) no-repeat center;
  background-size: 25px;
  border-radius: 50%;
  padding: 10px !important;
  width: 25px;
  height: 25px;
`;
