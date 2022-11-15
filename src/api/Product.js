import instance from "./axiosConfig";

const getProductList = () => {
  return instance.get("/product");
};
const getProductById = (id) => {
  return instance.get("/product/getbyid", { params: { id: id } });
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

const productApi = {
  getProductList,
  ceateProduct,
  updateProduct,
  getProductById,
};
export default productApi;
