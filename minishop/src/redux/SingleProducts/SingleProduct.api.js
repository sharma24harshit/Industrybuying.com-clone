import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

export const getSingleProductAPI = async(id) => {
    let res =  await axios.get(API_ENDPOINTS.PRODUCT_BY_ID(id));
    // console.log('res:', res.data)
    return res.data;
}