import http from 'k6/http';
import { sleep, check } from 'k6';
import { SharedArray } from 'k6/data';

export const options = {
  stages: [
    { duration: '5m', target: 200 }, // ramp up, subida:
    { duration: '20m', target: 200 }, // stable: 200 request por segundo por 20 minutos
    { duration: '5m', target: 0 }, // ramp down to 0 users
  ],
};

function getRandomDate() { return "2023-05-07" }

export default function () {
  const randomDate = getRandomDate();
  const res = http.get(`https://httpbin.test.k6.io/${randomDate}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
}
