import { ClientRequest } from "http";
import https from "https";

const options = {
    // Target URI to send the request to
    hostname: "encrypted.google.com",
    // Default port for HTTPS
    port: 443,
    // Specific URI path to request
    path: "/",
    // Specify HTTP Method
    method: "GET",
};
