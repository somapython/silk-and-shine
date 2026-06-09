import api from "./api";

export const addToCart =
async (
 productId:number
) =>
{
 const response =
    await api.post(
      "/Cart",
      {
        productId
      }
    );

  return response.data;
};

export const getCart =
async () =>
{
 const response =
 await api.get("/Cart");

 return response.data;
};