import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleGetRequest = (endpoint, callback) => {
  requestManager.get(endpoint, (response) => {
    if (response && response.status === 200) {
      callback(response.data);
    } else {
      messageManager.commonMessages(response);
    }
  });
};

export default handleGetRequest;