import instance from "./axiosConfig";

const getProductList = (data) => {
  return instance.get("/product", { params: data });
};
const getProductById = (id) => {
  return instance.get("/product/getbyid", { params: { id: id } });
};
const createProduct = (data) => {
  return instance.post("/product/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const updateProduct = (id, data) => {
  return instance.patch("/product/" + id, data);
};
const deleteProduct = (id) => {
  return instance.delete("/product/" + id);
};

const productApi = {
  getProductList,
  createProduct,
  updateProduct,
  getProductById,
  deleteProduct,
};
export default productApi;
