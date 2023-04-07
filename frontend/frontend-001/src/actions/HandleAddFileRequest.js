import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleAddFileRequest = (
  endpoint,
  file, id,
  callbakOnSuccess,
  showMessageOnSuccess = true,
  callbackOnFail) => {
  requestManager.postFile(endpoint, file, id, (response) => {
    if (response && response.status === 200) {
      if (callbakOnSuccess && typeof callbakOnSuccess === "function") {
        callbakOnSuccess(response.data);
      }
      if (showMessageOnSuccess) {
        messageManager.editMessages(response);
      }
    } else {
      if (callbackOnFail && typeof callbackOnFail === "function") {
        callbackOnFail(response);
      }
      messageManager.editMessages(response);
    }
  });
};

export default handleAddFileRequest;
