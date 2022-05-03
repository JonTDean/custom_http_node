import { ClientRequest } from "http";
import https from "https";
import { FetchGeneric, FetchOpts } from "./utils/fetchTypes";

// Custom Fetch Implementation
const CustomFetch = async <T = FetchGeneric>(
    options: FetchOpts,
): Promise<T> => {
    // Set the type of the return value to be a Record of strings and objects
    return new Promise((resolve, reject) => {
        const req: ClientRequest = https.request(options, (res) => {
            // Initialize a variable to assign the data
            let finalResponse = "";

            // This is what actually contains the data
            // the object itself is a stream that is being piped
            // into the response object when data is received.
            // What is the incoming data type composed of?
            // After using Object.prototype.toString.apply(d)
            // the data itself seems to be coming in as a Uint8Array
            // which makes sense due to the fact that it is coming in
            // as a stream of data.
            res.on("data", (d: Uint8Array) => {
                process.stdout.write(d);
                finalResponse += d;
            });

            // This is the end of the response that is called
            // when the data stream stops.
            res.on("end", () => {
                resolve(JSON.parse(finalResponse));
            });
        });

        // Handle errors and catch returning the response
        req.on("error", (e) => {
            reject(e);
        });

        // Close the request to free up resources
        // resolving at the end of the promise.
        req.end();
    });
};

export default CustomFetch;
