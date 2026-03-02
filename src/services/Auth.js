import axios from "axios";
import { AuthPrefix, BASE_URL } from "../config";
import axiosInstance from "../util/AxiosInstance";

export const signup = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}${AuthPrefix}register`, data);
    localStorage.setItem("user", JSON.stringify(data));
    return response;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong";
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}${AuthPrefix}verifyOTP`,
      data
    );
    return response;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong";
  }
};

export const resendOtp = async (email,token) => {
  try {
    const response = await axiosInstance.post(
      `${BASE_URL}${AuthPrefix}resendOtp`,
      email
    );

    return response;
  } catch (error) {
    console.log(error.response.status);
    throw error.response?.data?.message;
  }
};

export const login = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}${AuthPrefix}login`, data);
    return response;
  } catch (error) {
    throw error.response?.data?.message;
  }
};

export const verifyToken=async(token)=>{
  try {
    const response=await axios.get(`${BASE_URL}${AuthPrefix}verify-token`,   {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },)
    return response;
  } catch (error) {
    throw error.response?.data?.message;
  }
}

export const resetPassword=async(token,password)=>{
  try {
    const response=await axios.patch(`${BASE_URL} ${AuthPrefix}/forget`,password,{
      headers:{
        Authorization:`Bearer${token}`
      }
    });
    return response;
  } catch (error) {
    throw error.response?.data?.message;
  }
}