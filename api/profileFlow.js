import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetSessionDetailsFlow() {
  try {
    const getResponse = await axiosInstance.post(process.env.NEXT_PUBLIC_GET_PROFILE);
    const name = getResponse.data.name;
    const email = getResponse.data.email;

    return { name, email };
  } catch (error) {
    throw error;
  }
}
