import axiosInstance from "./axiosInstance";

export async function handleGetLogoutFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "logout");

    const logoutToken = getResponse.data.logoutToken;
    return logoutToken;
  } catch (error) {
    throw error;
  }
}

export async function handlePostLogoutFlow(logoutToken) {
  try {
    await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "logout", { logoutToken });
  } catch (error) {
    throw error;
  }
}
