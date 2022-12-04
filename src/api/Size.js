import instance from "./axiosConfig";

const getSizeList = () => {
  return instance.get("/sizes");
};
const ceateCategory = (data) => {
  return instance.post("/product", data);
};
const updateProduct = (data) => {
  return instance.post("/auth/facebook", {
    id_fb: data.id,
    email: data.email,
    name: data.name,
    avatar: data.picture.data.url,
  });
};

const sizeApi = { getSizeList };
export default sizeApi;
