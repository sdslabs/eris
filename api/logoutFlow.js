import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetLogoutFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_BASE_URL + "/logout");
    const logoutToken = getResponse.data.logoutToken;
    return logoutToken;
  } catch (error) {
    throw error;
  }
}

export async function handlePostLogoutFlow(logoutToken) {
  try {
    await axiosInstance.post(process.env.NEXT_PUBLIC_BASE_URL + "/logout", { logoutToken });
  } catch (error) {
    throw error;
  }
}
