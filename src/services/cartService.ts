import api from "./api";

export const addToCart =
async (
 productId:number
) =>
{
 return await api.post(
  `/Cart?productId=${productId}`
 );
};

export const getCart =
async () =>
{
 const response =
 await api.get("/Cart");

 return response.data;
};