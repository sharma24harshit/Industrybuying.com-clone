import axios from "axios";
import { API_ENDPOINTS } from "../../config/api";

export const getWishlistAPI = async() => {
    let res =  await axios.get(API_ENDPOINTS.WISHLIST);
    // console.log('res:', res.data)
    return res.data;
}

export const removeWishlist = async(id) => {
    try{
        let res =  await axios.delete(API_ENDPOINTS.WISHLIST_BY_ID(id));
        return res;
    }catch(err){
        return err;
    }
}
   