import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleFilterRequest = (endpoint, body, callbakOnSuccess, callbackOnFail, showAlertOnError = true, successParam) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 200) {
      if (callbakOnSuccess && typeof callbakOnSuccess === "function") {
        callbakOnSuccess(response.data, successParam);
      }
    } else {
      const errorMessage = messageManager.getErrorMessage();
      if (showAlertOnError) {
        messageManager.commonMessages(response);
      }
      if (callbackOnFail && typeof callbackOnFail === "function") {
        callbackOnFail(response, errorMessage);
      }
    }
  });
};

export default handleFilterRequest;
