const token = window.sessionStorage.getItem("token");
const config = {
  headers: { Authorization: token }
};

const apiConfig = {
  config
};

export default apiConfig;
