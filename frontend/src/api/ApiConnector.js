import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mockDataManager from "./../mock-data/mockDataManager";

const { REACT_APP_MOCK_DATA } = process.env;
let axiosMock = null;

if (REACT_APP_MOCK_DATA === "TRUE") {
  axiosMock = new MockAdapter(axios);
  mockDataManager.setUpMockData(axiosMock);
}

const apiConnector = {
  axios,
  axiosMock
};

export default apiConnector;
