import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetMFAFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_MFA);

    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    return { flowID, csrf_token };
  } catch (error) {
    throw error;
  }
}

export async function handlePostMFAFlow(flowID, csrf_token, totp) {
  try {
    const objData = { flowID, csrf_token, totp };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_MFA, objData);
    return res.data.status;
  } catch (error) {
    throw error;
  }
}
