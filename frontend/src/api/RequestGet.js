import axios from "./ApiConnector";
import getConfig from "./ApiConfig";
import getEndpoint from "./ApiEndpointBuilder";

const get = (endpoint, callback) => {
  const url = getEndpoint(endpoint);
  console.log("*** GET REQUEST ***");
  console.log(url);
  axios.get(url, getConfig())
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
