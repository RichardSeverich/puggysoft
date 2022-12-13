import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";
import i18n from "./../i18n/i18n";

const handleDelete = (endpoint, callbakOnSuccess, callbakOnCancel, callbackOnFail) => {
  const message = i18n.errorMessages.confirmModal;
  const result = window.confirm(message);
  if (result) {
    requestManager.remove(endpoint, (response) => {
      messageManager.deleteMessages(response);
      if (response && response.status === 200) {
        if (callbakOnSuccess) {
          callbakOnSuccess(response.data);
        }
      } else {
        if (callbackOnFail) {
          callbackOnFail(response);
        }
      }
    });
  } else {
    if (callbakOnCancel) {
      callbakOnCancel();
    }
  }
};

export default handleDelete;
