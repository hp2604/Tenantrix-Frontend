import axios from "axios";

export const signup=async(data)=>{
    try {
        const response=await axios.post("http://localhost:3000/api/v1/auth/register",data);
        localStorage.setItem("user",JSON.stringify(data))
        return response;
        
    } catch (error) {
        throw error.response?.data?.message || "Something went wrong";
    }
}

export const verifyOtp=async(data)=>{
    try {
        const response=axios.post("http://localhost:3000/api/v1/auth/verifyOTP",data);
        return response;

    } catch (error) {
        throw error.response?.data?.message || 'Something went wrong'
    }

}

export const resendOtp=async(email)=>{
    try {
        const response =axios.post("http://localhost:3000/api/v1/auth/resendOtp",email)
        return response;
    } catch (error) {
        console.log(error.response.message)
        throw error.response?.data?.message;     
    }

}

export const login=async(data)=>{
    try {
        
    } catch (error) {
        
    }

}