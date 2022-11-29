const PROTOCOL = window.location.protocol;
const HOSTNAME = window.location.hostname;
const PORT = window.location.port;
const URL = `${PROTOCOL}//${HOSTNAME}:${PORT}/`;

const APP_URL_CONFIG = {
  PROTOCOL,
  HOSTNAME,
  PORT,
  URL
};

export default APP_URL_CONFIG;
