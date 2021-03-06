import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";
import i18n from "./../i18n/i18n";

const handleDelete = (endpoint, callbak) => {
  const message = i18n.errorMessages.confirmModal;
  let result = window.confirm(message);
  if (result) {
    requestManager.remove(endpoint, (response) => {
      messageManager.deleteMessages(response);
      callbak(response.data);
    });
  }
};

export default handleDelete;