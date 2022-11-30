import apiConnector from "./ApiConnector";
import apiEndpointBuilder from "./ApiEndpointBuilder";

const post = (endpoint, body, callback) => {
  const url = apiEndpointBuilder.getEndpoint(endpoint);
  console.log("*** POST REQUEST ***");
  console.log(url);
  console.log(body);
  apiConnector.axios.post(url, body)
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

export default post;
