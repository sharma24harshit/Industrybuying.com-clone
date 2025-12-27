import { async } from "@firebase/util"
import axios from "axios"
import { API_ENDPOINTS } from "../../config/api"

export const getUserApi = async (id) => {
    return await axios.get(API_ENDPOINTS.USER_BY_ID(id))
}

export const addNewUserApi  = async(userData)=>{
    try{
        let res = await axios.post(API_ENDPOINTS.USERS,userData)
        return res
        }catch(err){
          return err
    }
}

export const logoutUserApi = async(userData)=>{
    try{
        let res = await axios.patch(API_ENDPOINTS.USER_BY_ID(userData.id),userData)
        console.log(res)
        // return res
        }catch(err){
          return err
    }
}
export const updateUserApi = async(userData)=>{
    console.log(userData)
    try{
        let res = await axios.patch(API_ENDPOINTS.USER_BY_ID(userData.id),userData)
        
        return res
        }catch(err){
        //   return err
    }
}


export const userCartUpdateApi = async(userData) => {
    console.log('userData:', userData)
    try{
        let res = await axios.patch(API_ENDPOINTS.USER_BY_ID(userData.id),userData)
        return res
    }catch(er){

    }
}