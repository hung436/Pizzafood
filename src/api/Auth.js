import instance from './axiosConfig';

const login = (data) => {
  return instance.post('/login', data);
};
const register = (data) => {
  return instance.post('/register', data);
};

export { login, register };
