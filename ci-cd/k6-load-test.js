import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 1000 }, // Ramp-up to 1,000 users
    { duration: '5m', target: 5000 }, // Ramp-up to 5,000 users
    { duration: '5m', target: 10000 }, // Ramp-up to 10,000 users
    { duration: '10m', target: 10000 }, // Stay at 10,000 users
    { duration: '2m', target: 0 },  // Ramp-down
  ],
};

export default function () {
  let res = http.get('http://localhost:3001/health');
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}
