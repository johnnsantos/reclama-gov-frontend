import React from "react";
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
import { insertNewRequirement } from "../../api/requirementsAPI";
import ReactLoading from "react-loading";

const New: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    local_name: "",
    description: "",
    contact: "",
    category: "",
    coords: [0, 0],
  });

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setIsLoading(true);

    insertNewRequirement({
      local_name: formValues.local_name,
      description: formValues.description,
      contact: formValues.contact,
      category: formValues.category,
      lat: formValues.coords[0],
      long: formValues.coords[1],
    })
      .then((res) => {
        setIsLoading(false);
        toast("Cadastro realizado com sucesso!", {
          type: "success",
          autoClose: 2000,
        });
      })
      .catch((err) => {
        setIsLoading(false);
        toast("Erro ao cadastrar!", {
          type: "error",
          autoClose: 2000,
        });
      });
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
      <Form onSubmit={onSubmitHandler}>
        {isLoading ? (
          <Container style={{ height: "100vh" }}>
            <ReactLoading
              type="spin"
              color="#222"
              height={"20%"}
              width={"20%"}
            />
          </Container>
        ) : (
          <>
            <FormTitle>Cadastro do ponto de melhoria</FormTitle>
            <Section>Dados</Section>
            <Input
              disabled={isLoading}
              label="Referência do local (Ex Escola São Tomaz)"
              name="local_name"
              value={formValues.local_name}
              onChange={setFormValues}
            />
            <Input
              disabled={isLoading}
              label="Descrição"
              name="description"
              value={formValues.description}
              onChange={setFormValues}
            />
            <Input
              disabled={isLoading}
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
                    setFormValues((prev) => ({
                      ...prev,
                      category: category.key,
                    }))
                  }
                  isActive={formValues.category === category.key}
                >
                  <CategoryImage src={category.url} />
                  {category.label}
                </CategoryBox>
              ))}
            </CategoryContainer>
            <ButtonContainer>
              <Button type="submit" disabled={isLoading}>
                Cadastrar
              </Button>
            </ButtonContainer>
          </>
        )}
      </Form>
    </Container>
  );
};

export default New;
