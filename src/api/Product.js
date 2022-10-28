import instance from "./axiosConfig";

const getProductList = () => {
  return instance.get("/product");
};
const ceateProduct = (data) => {
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

const productApi = { getProductList, ceateProduct, updateProduct };
export default productApi;
