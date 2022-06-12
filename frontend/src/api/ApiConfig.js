const getConfig = () => {
  const token = window.sessionStorage.getItem("token");
  const config = {
    headers: { Authorization: token }
  };
  return config;
};

export default getConfig;