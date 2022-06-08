import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

const { REACT_APP_MOCK_DATA } = process.env;

if (REACT_APP_MOCK_DATA == "TRUE") {
  const apiConnectorMock = new MockAdapter(axios);
  // Call to add mock data.
}

export default axios;
