import axios from "axios";
import { base_url } from "../../utils/base_url"
const register=async(userData)=>{
    const response=await axios.post(`${base_url}/register`,userData);
    if(response?.data){
        localStorage.setItem("user",JSON.stringify(response?.data))
        return response?.data;
    }
}
const login=async(userData)=>{
    const response=await axios.post(`${base_url}/login`,userData);
    if(response?.data){
        localStorage.setItem('user',JSON.stringify(response?.data));
    }
    return response?.data;
}

const authService={
    register,
    login
}

export default authService;