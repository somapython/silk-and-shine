import api from "./api";

export const getWishlist = async () => {
  const response =
    await api.get("/Wishlist");

  return response.data;
};

export const removeWishlist = async (
  id:number
) => {
  return await api.delete(
    `/Wishlist/${id}`
  );
};