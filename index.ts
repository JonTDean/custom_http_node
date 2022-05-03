import CustomFetch from "./src/CustomFetch";
import HRMockModel from "./src/HRMockModel";
import FetchOptions from "./src/utils/FetchOptions";

CustomFetch<HRMockModel>(FetchOptions)
    .then((r) => {
        console.log(r);
        return r;
    })
    .catch((err) => err);
