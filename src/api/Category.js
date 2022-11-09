import instance from "./axiosConfig";

const getCategoryList = () => {
  return instance.get("/categories");
};
const ceateCategory = (data) => {
  return instance.post("/product", data);
};
const updateProduct = (data) => {
  console.log(data);
  return instance.post("/auth/facebook", {
    id_fb: data.id,
    email: data.email,
    name: data.name,
    avatar: data.picture.data.url,
  });
};

const categoryApi = { getCategoryList };
export default categoryApi;
