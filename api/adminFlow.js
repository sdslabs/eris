import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetIdentitiesFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_LIST);
    return getResponse.data.identities;
  } catch (error) {
    throw error;
  }
}

export async function handleBanIdentityFlow(identity) {
  try {
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_BAN, { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleDeleteIdentityFlow(identity) {
  try {
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_DELETE, { identity });
    return res;
  } catch (error) {
    throw error;
  }
}
