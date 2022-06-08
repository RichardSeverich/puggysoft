const getConfig = () => {
  //const token = window.sessionStorage.getItem("token");
  const token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJzb2Z0dGVrSldUIiwic3ViIjoiYWRtaW4iLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjU0NjQ1OTcyLCJleHAiOjE2NTQ2Njc1NzJ9.YMwU75TYa90rdM3XAi86Ru2g3VOuawc9dEfef5WVSbzFof93-v8_V-xfOIaWyZBgsaKTAceSiiXM2ldjah3t-A";
  const config = {
    headers: { Authorization: token }
  };
  return config;
};

export default getConfig;