import UserDataService from "@/Service/users.service"
import { CREATE_USER } from "./action";

export const createUser=(name:String,email:String)=>async(dispatch)=>{
    try{
        const res=await UserDataService.create({name,email});
        dispatch({
            type:CREATE_USER,
            payload:res.data,
        });
        return Promise.resolve(res.data);
    }catch(err){
        return Promise.reject(err);
    }
}