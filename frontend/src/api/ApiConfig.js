function getConfig () {
  const token = window.sessionStorage.getItem("token");
  const config = {
    headers: { Authorization: token }
  };
  return config;
}

const apiConfig = {
  getConfig
};

export default apiConfig;
