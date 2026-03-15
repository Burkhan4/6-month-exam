import axios from "axios";

export default axios.create({
    baseURL: "https://e-commerce-api-v3.nt.azimumarov.uz/api/v1/",
    withCredentials: true,
})