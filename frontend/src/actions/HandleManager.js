// API
import handleGetRequest from "./HandleGetRequest";
import handleAddRequest from "./HandleAddRequest";
import handleEditRequest from "./HandleEditRequest";
import handleDeleteRequest from "./HandleDeleteRequest";
import handleLoginRequest from "./HandleLoginRequest";
import handleFilterRequest from "./HandleFilterRequest";
import handleAddFileRequest from "./HandleAddFileRequest";

// MOCK
/* import handleGetMock from "./mock/HandleGetMock";
import handleAddMock from "./mock/HandleAddMock";
import handleEditMock from "./mock/HandleEditMock";
import handleDeleteMock from "./mock/HandleDeleteMock";
// COMMON
import handleEditNavigate from "./HandleEditNavigate.js"; */

/* const { REACT_APP_MOCK_DATA } = process.env;
const isMockDisable = REACT_APP_MOCK_DATA === "FALSE";

// GET
const handleGet = (endpoint, callback) => {
  isMockDisable
  ? handleGetRequest(endpoint, callback)
  : handleGetMock(endpoint, callback);
};
// CREATE
const handleCreate = (endpoint, data, handleReset) => {
  isMockDisable
  ? handleAddRequest(endpoint, data, handleReset)
  : handleAddMock(endpoint, data, handleReset);
};
// EDIT
const handleEdit = (endpoint, data, id, handleReset, setIsEdit) => {
  isMockDisable
  ? handleEditRequest(endpoint, data, id, handleReset, setIsEdit)
  : handleEditMock(endpoint, data, id, handleReset, setIsEdit);
};
// DELETE
let handleDelete = handleDeleteMock;
if(isMockDisable){
  handleDelete = handleDeleteRequest;
} */

export {
  handleGetRequest,
  handleAddRequest,
  handleEditRequest,
  handleDeleteRequest,
  handleLoginRequest,
  handleFilterRequest,
  handleAddFileRequest
};
