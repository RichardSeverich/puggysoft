import requestManager from "./../api/RequestManager";
import messageManager from "./HandleErrorMessages";
import i18n from "./../i18n/i18n";

const handleDelete = (endpoint, id) => {
  const url = endpoint.concat(id);
  const message = i18n.errorMessages.confirmModal;
  const result = window.confirm(message);
  if (result) {
    requestManager.remove(url, (response) => {
      messageManager.deleteMessages(response);
      window.location.reload();
    });
  }
};

export default handleDelete;
