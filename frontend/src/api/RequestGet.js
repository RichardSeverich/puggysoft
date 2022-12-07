import apiConnector from "./ApiConnector";
import apiConfig from "./ApiConfig";
import apiEndpointBuilder from "./ApiEndpointBuilder";

const get = (endpoint, callback) => {
  const url = apiEndpointBuilder.getEndpoint(endpoint);
  console.log("*** GET REQUEST ***");
  console.log(url);
  apiConnector.axios.get(url, apiConfig.getConfig())
    .then(response => {
      console.log("*** RESPONSE ***");
      console.log(response);
      callback(response);
    })
    .catch(error => {
      console.log("*** ERROR RESPONSE ***");
      if (error.response) {
        console.log(error.response);
        callback(error.response);
      } else {
        console.log(error);
        callback(error);
      }
    });
};

export default get;
