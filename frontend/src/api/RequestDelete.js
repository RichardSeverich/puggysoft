import axios from './ApiConnector';
import getConfig from "./ApiConfig"
import getEndpoint from "./ApiEndpointBuilder";

const remove = (endpoint, callback) => {
  const url = getEndpoint(endpoint);
  console.log("*** DELETE REQUEST ***");
  console.log(url);
  axios.delete(url, getConfig())
    .then(response => {
      callback(response);
    })
    .catch(error => {
      console.log("*** ERROR RESPONSE ***");
      if(error.response){
        console.log(error.response)
        callback(error.response);
      } else {
        console.log(error)
        callback(error);
      }
  })
};

export default remove;