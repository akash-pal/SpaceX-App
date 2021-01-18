
import * as constant from "./const"

export default function makeQueryParams(query) {
    let url = constant.baseURL;
    if (query && query.launch) {
        url += `&launch_success=${query.launch}`
    }
    if (query && query.landing) {
        url += `&land_success=${query.landing}`
    }
    if (query && query.selectedYear) {
        url += `&launch_year=${query.selectedYear}`;
    }
    return url;
}