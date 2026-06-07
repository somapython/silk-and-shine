import api from "./api";

export const uploadImage =
async(file:File)=>
{
  const formData =
  new FormData();

  formData.append(
    "file",
    file
  );

  const response =
  await api.post(
    "/Upload",
    formData
  );

  return response.data.imageUrl;
};
