import instance from "./axiosConfig";

const login = (data) => {
  return instance.post(
    "/auth/signin",
    {
      email: data.email,
      password: data.password,
    },
    { withCredentials: true }
  );
};
const register = (data) => {
  return instance.post("/auth/signup", data);
};
const logout = () => {
  return instance.get("/auth/logout");
};
const loginFB = (data) => {
  return instance.post("/auth/facebook", {
    id_fb: data.id,
    email: data.email,
    name: data.name,
    avatar: data.picture.data.url,
  });
};
const getInforUser = () => {
  return instance.get("/users/infor");
};
const refreshTK = () => {
  return instance.post("/auth/refresh", { withCredentials: true });
};
export { login, register, loginFB, getInforUser, refreshTK, logout };
