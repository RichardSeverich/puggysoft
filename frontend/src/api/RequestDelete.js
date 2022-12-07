import apiConnector from "./ApiConnector";
import apiConfig from "./ApiConfig";
import apiEndpointBuilder from "./ApiEndpointBuilder";

const remove = (endpoint, callback) => {
  const url = apiEndpointBuilder.getEndpoint(endpoint);
  console.log("*** DELETE REQUEST ***");
  console.log(url);
  apiConnector.axios.delete(url, apiConfig.getConfig())
    .then(response => {
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

export default remove;
