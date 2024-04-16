import axios from "axios";

export const baseApi = axios.create({
    baseURL:"https://canligraphql.mo.vc/api/rest"
})

