import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleEdit = (endpoint, body, id, handleReset, setIsEdit) => {
  const url = endpoint.concat(id);
  requestManager.put(url, body, (response) => {
    if (response && response.status === 200) {
      handleReset();
      setIsEdit(undefined);
    }
    messageManager.editMessages(response);
  });

};

export default handleEdit;