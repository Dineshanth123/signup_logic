
import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const register = (obj) => {
  console.log(obj.username)
  return axios.post(API_URL + 'register/', { username:obj.username, password:obj.password },{
    headers: { 'Content-Type': 'multipart/form-data' }  
  });
};

const login = (username, password) => {
  return axios.post(API_URL + 'token/auth/', { username, password });
};

const authService = {
  register,
  login,
};

export default authService;
