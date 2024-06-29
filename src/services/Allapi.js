import { base_url } from "./base_url";
import { commonRequest } from "./commonRqst";

//  register
export const userRegister = async(body,headers)=>{
    return await commonRequest("POST",`${base_url}/user/register`,body,headers)
}