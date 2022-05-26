const baseURL = "https://reclama-gov.herokuapp.com";

interface Requirement {
  local_name: string;
  description: string;
  category: string;
  contact: number;
  lat: number;
  long: number;
  coords: Array<number>;
}

export const insertNewRequirement = async (req: Requirement) => {
  const response = await fetch(`${baseURL}/requirements`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  });
  return response.json();
};

export const getAllRequirements = async () => {
  const response = await fetch(`${baseURL}/requirements`);
  return response.json();
};
