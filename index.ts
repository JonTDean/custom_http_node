import { ClientRequest } from "http";
import https from "https";

const options = {
    // Target URI to send the request to
    hostname: "jsonmock.hackerrank.com",
    // Default port for HTTPS
    port: 443,
    // Specific URI path to request
    path: "/api/articles?page=0",
    // Specify HTTP Method
    method: "GET",
};

// Create a new request object that
// targets the specfied options key values
const req: ClientRequest = https.request(options, (res) => {
    process.stdout.write(`statusCode: ${res.statusCode}`);
    process.stdout.write(`headers: ${res.headers}`);

    res.on("data", (d) => {
        process.stdout.write(d);
    });
});

// Handle errors and catch
// them before they error out the process
req.on("error", (e) => {
    process.stderr.write(e as unknown as string);
});

// Close the request to free up resources
// and avoid memory leaks
req.end();
