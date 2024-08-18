import axiosInstance from "./axiosInstance";

export async function handleGetSessionDetailsFlow() {
  try {
    const getResponse = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "get_profile");
    return getResponse.data;
  } catch (error) {
    throw error;
  }
}
