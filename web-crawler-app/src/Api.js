import axios from "axios";

export const getLinks = url => {
  console.log(url);
  return axios.get(`localhost:9090/${url}`).then(res => {
    console.log(res.data);
  });
};

export const getStatusCodes = url => {
  return axios.get(`${url}`).then(res => {
    console.log(res.status);
  });
};
