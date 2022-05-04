import CustomFetch from "./src/CustomFetch";
import FetchOptions from "./src/utils/FetchOptions";

CustomFetch(FetchOptions)
    .then((r) => {
        console.log(r);
        return r;
    })
    .catch((err) => err);
