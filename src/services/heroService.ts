import api from "./api";

export const getHero =
async () => {

  const response =
  await api.get(
    "/Hero"
  );

  return response.data;
};