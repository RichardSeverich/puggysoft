import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleAddRequest = (endpoint, body, callback, showMessageOnSuccess = true, callbackOnFail) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 201 && callback) {
      callback(response.data);
      if (showMessageOnSuccess) {
        messageManager.addMessages(response);
      }
    } else {
      messageManager.addMessages(response);
      if (callbackOnFail) {
        callbackOnFail(response);
      }
    }
  });
};

export default handleAddRequest;
