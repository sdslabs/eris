import axios from "axios";

const axiosInstance = axios.create({ withCredentials: true });

export async function handleGetRecoveryFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_RECOVERY);

    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    return { flowID, csrf_token };
  } catch (error) {
    throw error;
  }
}

export async function handlePostRecoveryFlow(flowID, csrf_token, email) {
  try {
    const objData = { flowID, csrf_token, email };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_RECOVERY, objData);
    return res.data.message;
  } catch (error) {
    throw error;
  }
}
