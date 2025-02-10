import http from 'k6/http';

// Esto llamara a la API todas las veces que pueda en una duracion de 10 segundos
export const options = {
  vus: 1, // Number of virtual users.
  duration: '10s' // Duration 10 seconds
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
}
