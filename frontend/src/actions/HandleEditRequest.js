import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";

const handleEdit = (endpoint, body, id, callbakOnSuccess, callbackOnFail) => {
  const url = endpoint.concat(id);
  requestManager.put(url, body, (response) => {
    if (response && response.status === 200) {
      if (callbakOnSuccess && typeof callbakOnSuccess === "function") {
        callbakOnSuccess(response.data);
      }
      messageManager.editMessages(response);
    } else {
      if (callbackOnFail && typeof callbackOnFail === "function") {
        callbackOnFail(response);
      }
      messageManager.editMessages(response);
    }
  });
};

export default handleEdit;
