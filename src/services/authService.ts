import api from "./api";

export const registerUser = async (data: any) => {
  const response = await api.post(
    "/Auth/register",
    data
  );

  return response.data;
};

export const loginUser = async (data: any) => {
  const response = await api.post(
    "/Auth/login",
    data
  );

  return response.data;
};