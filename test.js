import http from "k6/http";

export let options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: "per-vu-iterations",
      vus: 10,
      iterations: 2000,
      maxDuration: "1m",
    },
  },
  thresholds: {
    // We want the 95th percentile of all HTTP request durations to be less than 500ms
    http_req_duration: ["p(95)<1"],
  },
};

export default function () {
  http.get("http://localhost:8080");
}
