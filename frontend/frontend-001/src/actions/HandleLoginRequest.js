import requestManager from "./../api/RequestManager";
// import messageManager from "./HandleErrorMessages";

const handleLoginRequest = (endpoint, body, callback) => {
  requestManager.postAuth(endpoint, body, (response) => {
    // if (response && response.status === 200) {
    callback(response);
    // } else {
    // messageManager.loginMessages(response);
    // callback(response);
    // }
  });
};

export default handleLoginRequest;
