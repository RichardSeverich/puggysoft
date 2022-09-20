import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleAddRequest = (endpoint, body, callback, showMessageOnSuccess = true) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 201 && callback) {
      callback(response.data);
      if (showMessageOnSuccess) {
        messageManager.addMessages(response);
      }
    } else {
      messageManager.addMessages(response);
    }
  });
}

export default handleAddRequest;