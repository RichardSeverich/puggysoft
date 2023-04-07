import apiEndpointBuilder from "./../api/ApiEndpointBuilder";
// LOGIN
import loginAdminMock from "./users/login-admin-mock.json";
import loginAdminSalesMock from "./sales/login-admin-sales-mock.json";
// USERS
import usersMock from "./users/users-mock.json";
import userAdminRolesMock from "./users/user-admin-roles-mock.json";
import userAdminSalesRolesMock from "./sales/user-admin-roles-mock.json";
// SALES
import salesMock from "./sales/sales-mock.json";

function setUpMockData (axiosMock) {
  // LOGIN
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("login"),
    {
      username: "admin",
      password: "admin123"
    }
  ).reply(200, loginAdminMock);
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("login"),
    {
      username: "adminsales",
      password: "admin123"
    }
  ).reply(200, loginAdminSalesMock);

  // USERS
  // http://{HOSTNAME}:{PORT}/api/v1/users/1001
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/")).reply(201, 1100);
  // http://{HOSTNAME}:{PORT}/api/v1/users/picture/
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/picture/")).reply(200, 1100);
  // http://{HOSTNAME}:{PORT}/api/v1/roles/user-username/admin
  axiosMock.onGet(apiEndpointBuilder.getEndpoint("roles/user-username/admin")).reply(200, userAdminRolesMock);
  // http://{HOSTNAME}:{PORT}/api/v1/roles/user-username/admin
  axiosMock.onGet(apiEndpointBuilder.getEndpoint("roles/user-username/adminsales")).reply(200, userAdminSalesRolesMock);
  // http://{HOSTNAME}:{PORT}/api/v1/users/filter/size/10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/filter/size/10")).reply(200, 1);
  // http://{HOSTNAME}:{PORT}/api/v1/users/filter?page=0&size=10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("users/filter?page=0&size=10")).reply(200, usersMock);

  // SALES
  // http://{HOSTNAME}:{PORT}/api/v1/sales/filter?page=0&size=10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("sales/filter?page=0&size=10")).reply(200, salesMock);
  // http://{HOSTNAME}:{PORT}/api/v1/sales/filter/size/10
  axiosMock.onPost(apiEndpointBuilder.getEndpoint("sales/filter/size/10")).reply(200, 1);
}

const mockDataManager = {
  setUpMockData
};

export default mockDataManager;
