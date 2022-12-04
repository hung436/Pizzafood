import instance from "./axiosConfig";

const order = (data) => {
  return instance.post("/order", data);
};
const getCategoryList = () => {
  return instance.get("/categories");
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

const cartApi = { getCategoryList, order };
export default cartApi;
