import http from "k6/http";

export let options = {
  discardResponseBodies: true,
  scenarios: {
    // my_awesome_api_test: {
    //   executor: "constant-vus",
    //   vus: 10,
    //   duration: "1m",
    // },
    fixed_number_of_users: {
      executor: "per-vu-iterations",
      vus: 1000,
      iterations: 100,
      maxDuration: "5m",
    },
    // contacts: {
    //   executor: "constant-arrival-rate",
    //   rate: 200, // 200 RPS, since timeUnit is the default 1s
    //   duration: "1m",
    //   preAllocatedVUs: 50,
    //   maxVUs: 100,
    // },
  },
  thresholds: {
    // We want the 95th percentile of all HTTP request durations to be less than 500ms
    http_req_duration: ["p(95)<1"],
  },
};

export default function () {
  http.get("http://localhost:8080");
}
