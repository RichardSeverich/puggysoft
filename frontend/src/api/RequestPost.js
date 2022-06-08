import axios from './ApiConnector';
import getConfig from "./ApiConfig"
import getEndpoint from "./ApiEndpointBuilder";

const post = (endpoint, body, callback) => {
  const url = getEndpoint(endpoint);
  console.log("*** POST REQUEST ***");
  console.log(url);
  console.log(body);
  axios.post(url, body, getConfig())
    .then(response => {
      console.log("*** RESPONSE ***");
      console.log(response);
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

export default post;