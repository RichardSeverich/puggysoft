import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleAddFileRequest = (endpoint, file, id, callback, showMessageOnSuccess = true) => {
  requestManager.postFile(endpoint, file, id, (response) => {
    if (response && response.status === 200) {
      if (callback && callback !== null) {
        callback(response.data);
      }
      if (showMessageOnSuccess) {
        messageManager.editMessages(response);
      }
    } else {
      messageManager.editMessages(response);
    }
  });
};

export default handleAddFileRequest;
