const baseURL = "https://reclama-gov.herokuapp.com";

interface Requirement {
  local_name: string;
  description: string;
  category: string;
  contact: string;
  lat: number;
  long: number;
}

export const insertNewRequirement = async (req: Requirement) => {
  try {
    const response = await fetch(`${baseURL}/requirements`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllRequirements = async () => {
  const response = await fetch(`${baseURL}/requirements`);
  return response.json();
};
