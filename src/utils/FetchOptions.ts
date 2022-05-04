import { FetchOpts } from "./FetchTypes";

const options: FetchOpts = {
    // Target URI to send the request to
    hostname: "jsonmock.hackerrank.com",
    // Default port for HTTPS
    port: 443,
    // Specific URI path to request
    path: "/api/articles?page=0",
    // Specify HTTP Method
    method: "GET",
};

export default options;
