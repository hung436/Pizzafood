import instance from "./axiosConfig";

const getOrderList = (data) => {
  return instance.get("/order", { params: data });
};
const getOrderById = (id) => {
  return instance.get("/order/getbyid", { params: { id: id } });
};
const createOrder = (data) => {
  return instance.post("/order/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const updateOrder = (id, data) => {
  return instance.patch("/order/" + id, data);
};
const deleteOrder = (id) => {
  return instance.delete("/order/" + id);
};

const orderApi = {
  getOrderList,
  createOrder,
  updateOrder,
  getOrderById,
  deleteOrder,
};
export default orderApi;
