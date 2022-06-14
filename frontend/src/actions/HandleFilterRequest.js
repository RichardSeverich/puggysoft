import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleFilterRequest = (endpoint, body, callback) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 200) {
      callback(response.data);
    } else {
      messageManager.commonMessages(response);
    }
  });
}

export default handleFilterRequest;