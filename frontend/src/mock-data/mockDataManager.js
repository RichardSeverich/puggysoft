import apiEndpointBuilder from "./../api/ApiEndpointBuilder";
import usersMock from "./users-mock.json";
import loginMock from "./login-mock.json";
import userAdminRolesMock from "./user-admin-roles-mock.json";

function setUpMockData (axiosMock) {
  // LOGIN
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("login")).reply(200, loginMock);

  // USERS
  // http://{HOSTNAME}:{PORT}/api/v1/users/1001
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/")).reply(201, 1100);
  // http://{HOSTNAME}:{PORT}/api/v1/users/picture/
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/picture/")).reply(200, 1100);
  // http://{HOSTNAME}:{PORT}/api/v1/roles/user-username/{username}
  axiosMock.onGet(apiEndpointBuilder.getEndpoint("roles/user-username/admin")).reply(200, userAdminRolesMock);
  // http://{HOSTNAME}:{PORT}/api/v1/users/filter/size/10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/filter/size/10")).reply(200, 1);
  // http://{HOSTNAME}:{PORT}/api/v1/users/filter?page=0&size=10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/filter?page=0&size=10")).reply(200, usersMock);
}

const mockDataManager = {
  setUpMockData
};

export default mockDataManager;
