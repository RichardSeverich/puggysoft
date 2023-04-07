import apiConnector from "./ApiConnector";
import apiEndpointBuilder from "./ApiEndpointBuilder";

const post = (endpoint, file, id, callback) => {
  const url = apiEndpointBuilder.getEndpoint(endpoint);
  const bodyFormData = new FormData();
  const token = window.sessionStorage.getItem("token");
  bodyFormData.append("file", file);
  bodyFormData.append("id", id);
  console.log("*** POST REQUEST ***");
  console.log(url);
  console.log(bodyFormData);
  apiConnector.axios(
    {
      method: "post",
      url,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token
      }
    })
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
