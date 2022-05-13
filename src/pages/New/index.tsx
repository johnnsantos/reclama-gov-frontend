import Input from "../../components/Input";
import {
  Button,
  ButtonContainer,
  CategoryBox,
  CategoryContainer,
  CategoryImage,
  Container,
  Form,
  FormTitle,
  MapContainer,
  Section,
} from "./styles";
import { useState } from "react";
import { LatLngExpression, LeafletMouseEvent, Map } from "leaflet";
import { Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import { categories } from "./categories";
import useGetLocation from "../../hooks/useGetLocation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const New: React.FC = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    contact: "",
    category: "",
    coords: [0, 0],
  });

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    const request = await fetch("ENDEREÇO", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formValues,
        latitude: formValues.coords[0],
        longitude: formValues.coords[1],
      }),
    });

    if (request.ok) {
      toast("Cadastro realizado com sucesso!", {
        type: "success",
        autoClose: 2000,
        onClose: () => navigate("/"),
      });
    }
  };

  const location = useGetLocation();

  if (!location) {
    return <h1>Obtendo localização...</h1>;
  }

  const CustomMarker = () => {
    const map = useMapEvents({
      click(event) {
        setFormValues((prev) => ({
          ...prev,
          coords: [event.latlng.lat, event.latlng.lng],
        }));
      },
    });

    return (
      <Marker
        position={
          [formValues.coords[0], formValues.coords[1]] as LatLngExpression
        }
      ></Marker>
    );
  };

  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
        <FormTitle>Cadastro do ponto de melhoria</FormTitle>
        <Section>Dados</Section>
        <Input
          label="Referência do local (Ex Escola São Tomaz)"
          name="name"
          value={formValues.name}
          onChange={setFormValues}
        />
        <Input
          label="Descrição"
          name="description"
          value={formValues.description}
          onChange={setFormValues}
        />
        <Input
          label="Contato para acompanhamento"
          name="contact"
          value={formValues.contact}
          onChange={setFormValues}
        />
        <Section>Endereço</Section>
        <MapContainer
          center={
            {
              lat: location[0],
              lng: location[1],
            } as LatLngExpression
          }
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <CustomMarker />
        </MapContainer>
        <Section>Categoria</Section>
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryBox
              key={category.key}
              onClick={() =>
                setFormValues((prev) => ({ ...prev, category: category.key }))
              }
              isActive={formValues.category === category.key}
            >
              <CategoryImage src={category.url} />
              {category.label}
            </CategoryBox>
          ))}
        </CategoryContainer>
        <ButtonContainer>
          <Button type="submit">Cadastrar</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default New;
