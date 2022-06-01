import { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapContainer, CustomMarker } from "./styles";
import { LatLngExpression, divIcon } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import useGetLocation from "../../hooks/useGetLocation";
import { getAllRequirements } from "../../api/requirementsAPI";

interface urlsInterface {
  roads: string;
  water: string;
  fun: string;
  home: string;
  security: string;
  ilumination: string;
}

const getIconByCategory = (category: string) => {
  const urls: urlsInterface = {
    roads: "/media/roads.png",
    water: "/media/water.png",
    fun: "/media/fun.png",
    home: "/media/homes.png",
    security: "/media/security.png",
    ilumination: "/media/ilumination.png",
  };

  let iconURL: string = "";

  switch (category) {
    case "roads":
      iconURL = urls.roads;
      break;
    case "water":
      iconURL = urls.water;
      break;
    case "fun":
      iconURL = urls.fun;
      break;
    case "home":
      iconURL = urls.home;
      break;
    case "security":
      iconURL = urls.security;
      break;
    case "ilumination":
      iconURL = urls.ilumination;
      break;
  }

  const iconMarkup = renderToStaticMarkup(<CustomMarker url={iconURL} />);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });
  return customMarkerIcon;
};

const Requirements = () => {
  const [requirements, setRequirements] = useState<any[]>([]);
  useEffect(() => {
    getAllRequirements()
      .then((res) => setRequirements(res))
      .catch((err) => console.log(err));
  }, []);

  const location = useGetLocation();

  if (!location) {
    return <h1>Obtendo localização...</h1>;
  }
  return (
    <MapContainer
      center={
        {
          lat: location[0],
          lng: location[1],
        } as LatLngExpression
      }
      zoom={10}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {requirements.map((requirement) => (
        <Marker
          position={[requirement.lat, requirement.long]}
          icon={getIconByCategory(requirement.category)}
        >
          <Popup>
            <span style={{ fontWeight: "bold", display: "block" }}>
              {requirement.local_name}
            </span>
            <span>{requirement.description}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Requirements;
