const { REACT_APP_BACKEND_PROTOCOL } = process.env;
const { REACT_APP_BACKEND_HOST } = process.env;
const { REACT_APP_BACKEND_PORT } = process.env;
const { REACT_APP_BACKEND_VERSION } = process.env;

let endPointBase = "";
endPointBase = endPointBase.concat(REACT_APP_BACKEND_PROTOCOL);
endPointBase = endPointBase.concat("://");
endPointBase = endPointBase.concat(REACT_APP_BACKEND_HOST);
endPointBase = endPointBase.concat(":");
endPointBase = endPointBase.concat(REACT_APP_BACKEND_PORT);
endPointBase = endPointBase.concat(REACT_APP_BACKEND_VERSION);
endPointBase = endPointBase.concat("/");

const getEndpoint = (endpoint) => {
  return endPointBase.concat(endpoint);
};

const apiEndpointBuilder = {
  getEndpoint
};

export default apiEndpointBuilder;
