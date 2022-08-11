import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleEdit = (endpoint, body, id, callback) => {
  const url = endpoint.concat(id);
  requestManager.put(url, body, (response) => {
    if (response && response.status === 200) {
      messageManager.editMessages(response)
      callback(response.data);
    } else {
      callback(response);
      messageManager.editMessages(response);
    }
  });

};

export default handleEdit;