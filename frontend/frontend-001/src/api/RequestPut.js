import apiConnector from "./ApiConnector";
import apiConfig from "./ApiConfig";
import apiEndpointBuilder from "./ApiEndpointBuilder";

const put = (endpoint, body, callback) => {
  const url = apiEndpointBuilder.getEndpoint(endpoint);
  console.log("*** PUT REQUEST ***");
  console.log(url);
  console.log(body);
  apiConnector.axios.put(url, body, apiConfig.getConfig())
    .then(response => {
      console.log("*** RESPONSE ***");
      console.log(response);
      callback(response);
    })
    .catch(error => {
      console.log("*** RESPONSE ***");
      if (error.response) {
        console.log(error.response);
        callback(error.response);
      } else {
        console.log(error);
        callback(error);
      }
    });
};

export default put;
