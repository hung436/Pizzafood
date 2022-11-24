import instance from "./axiosConfig";

const getProductList = () => {
  return instance.get("/product");
};
const getProductById = (id) => {
  return instance.get("/product/getbyid", { params: { id: id } });
};
const createProduct = (data) => {
  return instance.post("/product/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
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
  createProduct,
  updateProduct,
  getProductById,
};
export default productApi;
