import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetSessionDetailsFlow() {
  try {
    const getResponse = await axiosInstance.post(process.env.NEXT_PUBLIC_BASE_URL + "");
    return getResponse.data;
  } catch (error) {
    throw error;
  }
}

export async function handleGetVerificationDetails() {
  try {
    const getResponse = await axiosInstance.post(process.env.NEXT_PUBLIC_BASE_URL + "/get_verified_status");
    return getResponse.data;
  } catch (error) {
    throw error;
  }
}
