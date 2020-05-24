const axios = require('axios');

export const service = (reqObj) => {
  let { url } = reqObj;
  const { method = 'get', page } = reqObj;
  if (page) {
    url = `${url}?page=${page}`;
  }
  return axios({
    method,
    url
  }).then(response => {
    return response && response.data;
  });
};
