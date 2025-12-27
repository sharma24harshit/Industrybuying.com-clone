import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

export const getCartAPI = async(userName) => {
    let res =  await axios.get(API_ENDPOINTS.USER_BY_NAME(userName));
    return res.data;
}


export const updateCartApi =  async(newData) => {
    try{
        let res = await axios.post(API_ENDPOINTS.USER_BY_NAME(newData.name),newData.cart);
        console.log(res)
    }catch(err){
        console.log("errrroroeroer is",err)
    }
}
export const deleteCart = async(id) => {
    try{
        let res =  await axios.delete(API_ENDPOINTS.CART_BY_ID(id));
        return res;
    }catch(err){
        return err;
    }
}
   