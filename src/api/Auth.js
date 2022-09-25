import instance from './axiosConfig';

const login = (data) => {
  return instance.post('/auth/login',{ email : data.username, password: data.password });
};
const register = (data) => {
  return instance.post('/register', data);
};
const loginFB = (data) => {
  console.log(data)
  return instance.post('/auth/facebook', {id_fb:data.id,email:data.email,name:data.name,avatar:data.picture.data.url});
};

export { login, register ,loginFB};
