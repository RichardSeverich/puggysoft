import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleAddRequest = (endpoint, body, callback) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 201 && callback) {
      callback(response.data);
    }
    messageManager.addMessages(response);
  });
}

export default handleAddRequest;