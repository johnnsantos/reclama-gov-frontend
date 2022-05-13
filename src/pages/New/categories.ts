interface categoriesInterface {
  key: string;
  label: string;
  url: string;
}

export const categories: categoriesInterface[] = [
  { key: "basket", label: "Vestuário", url: "media/basket.png" },
  { key: "gas", label: "Combustível", url: "media/gas.png" },
  {
    key: "hospital",
    label: "Farmácia/Hospital",
    url: "media/hospital.png",
  },
  { key: "pet", label: "Pet Shop", url: "media/pet.png" },
  {
    key: "restaurant",
    label: "Restaurante",
    url: "media/restaurant.png",
  },
  { key: "shopping", label: "Mercado", url: "media/shopping.png" },
];
