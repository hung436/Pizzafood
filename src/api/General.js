import instance from "./axiosConfig";

const getGeneral = () => {
  return instance.get("/general");
};

const generalApi = {
  getGeneral,
};
export default generalApi;
