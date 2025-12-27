import axios from 'axios'
import { API_ENDPOINTS } from "../../config/api"

export const getAdmin = async (data)=>{
    try{
        let res = await axios.post(API_ENDPOINTS.ADMIN_LOGIN,data)
        return  res.data.access_token
    }catch(err){
        return err
    }
}