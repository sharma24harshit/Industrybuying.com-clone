import axios from "axios"
import { API_ENDPOINTS } from "../../config/api"

export const getProductsApi = async(page)=>{
    try{
        const res = await axios.get(`${API_ENDPOINTS.PRODUCTS}?_page=${page}&_limit=10`)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}
export const getAllProductsApi = async()=>{
    try{
        const res = await axios.get(API_ENDPOINTS.PRODUCTS)
        return res.data
    }catch(err){
        console.log('error',err)
    }
}

export const getAllUsersApi = async()=>{
    try{
        let res = await axios.get(API_ENDPOINTS.USERS)
        return res.data
    }catch(err){
        console.log(err)
    }
}