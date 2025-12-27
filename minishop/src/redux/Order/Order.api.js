import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

export const getOrderAPI = async() => {
    let res =  await axios.get(API_ENDPOINTS.CART);
    return res.data;
}


export const deleteOrder = async(id) => {
    try{
        let res =  await axios.delete(API_ENDPOINTS.CART_BY_ID(id));
        return res;
    }catch(err){
        return err;
    }
}