import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";
import i18n from "./../i18n/i18n";

const handleDelete = (endpoint, callbak, callbakOnCancel) => {
  const message = i18n.errorMessages.confirmModal;
  const result = window.confirm(message);
  if (result) {
    requestManager.remove(endpoint, (response) => {
      messageManager.deleteMessages(response);
      if (callbak) {
        callbak(response.data);
      }
    });
  } else {
    if (callbakOnCancel) {
      callbakOnCancel();
    }
  }
};

export default handleDelete;
