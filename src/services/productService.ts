import api from "./api";

export const getProducts = async () => {
  const response =
    await api.get("/Products");

  return response.data;
};

export const addProduct = async (
  product: any
) => {
  const response =
    await api.post(
      "/Products",
      product
    );

  return response.data;
};

export const getProductById =
async (id:number) =>
{
  const response =
    await api.get(
      `/Products/${id}`
    );

  return response.data;
};

export const getProductsByCategory =
async(category:string)=>
{
  const response =
    await api.get(
      `/Category/products/${category}`
    );

  return response.data;
};