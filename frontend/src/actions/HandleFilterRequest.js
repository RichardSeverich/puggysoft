import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleFilterRequest = (endpoint, body, callbakOnSuccess) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 200) {
      if (callbakOnSuccess && typeof callbakOnSuccess === "function") {
        callbakOnSuccess(response.data);
      }
    } else {
      messageManager.commonMessages(response);
    }
  });
};

export default handleFilterRequest;
