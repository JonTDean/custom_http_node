import * as https from "https";

// Create a binary data type
type FetchOpts = string | https.RequestOptions;

// Create a type that captures a specific type of data
// that is being returned from the fetch request
type FetchGeneric = Record<string, object>;

export { FetchOpts, FetchGeneric };
