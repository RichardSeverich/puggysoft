import requestManager from "./../api/RequestManager"
import messageManager from "./HandleErrorMessages";

const handleAddRequest = (endpoint, body, handleReset) => {
  requestManager.post(endpoint, body, (response) => {
    if (response && response.status === 201) { handleReset(); }
    messageManager.addMessages(response);
  });
}

export default handleAddRequest;