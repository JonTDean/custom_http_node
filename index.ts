import CustomFetch from "./src/CustomFetch";
import HRMockModel from "./src/HRMockModel";
import FetchOptions from "./src/utils/FetchOptions";

CustomFetch<HRMockModel>(FetchOptions)
    .then((data) => {
        // process.stdout.write(data);
        // if(data)
        // 	data.map((e) => process.stdout.write(e));
        return data;
    })
    .catch((err) => console.log(err));

// console.log("DATA: ", data);
// // Log each of the articles
// for (const obj in data) {
//     process.stdout.write(obj);
// }
