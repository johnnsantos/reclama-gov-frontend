interface categoriesInterface {
  key: string;
  label: string;
  url: string;
}

export const categories: categoriesInterface[] = [
  { key: "roads", label: "Estradas", url: "media/roads.png" },
  { key: "homes", label: "Loteamento", url: "media/homes.png" },
  {
    key: "ilumination",
    label: "Iluminação",
    url: "media/ilumination.png",
  },
  { key: "water", label: "Esgoto", url: "media/water.png" },
  {
    key: "security",
    label: "Segurança",
    url: "media/security.png",
  },
  { key: "fun", label: "Lazer", url: "media/fun.png" },
];
