import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetSessionDetailsFlow() {
  try {
    const getResponse = await axiosInstance.post(process.env.NEXT_PUBLIC_GET_PROFILE);
    return getResponse.data;
  } catch (error) {
    throw error;
  }
}
