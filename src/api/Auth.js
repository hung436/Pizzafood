import instance from "./axiosConfig";

const login = (data) => {
  console.log("data", data);
  return instance.post(
    "/auth/signin",
    {
      email: data.username,
      password: data.password,
    },
    { withCredentials: true }
  );
};
const register = (data) => {
  return instance.post("/register", data);
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
export { login, register, loginFB, getInforUser };
