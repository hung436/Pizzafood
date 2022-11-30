import instance from "./axiosConfig";

const getUserList = () => {
  return instance.get("/users");
};
const getUserById = (id) => {
  return instance.get(`/users/findbyid/${id}`);
};
const createUser = (data) => {
  return instance.post("/product/create", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
const updateUser = (data) => {
  return instance.patch("/users/update", data);
};

const userApi = {
  getUserList,
  createUser,
  updateUser,
  getUserById,
};
export default userApi;
