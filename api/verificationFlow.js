import axiosInstance from "./axiosInstance";

export async function handleGetVerifyFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "verification");

    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    return { flowID, csrf_token };
  } catch (error) {
    throw error;
  }
}

export async function handlePostVerifyFlow(flowID, csrf_token, email) {
  try {
    const objData = { flowID, csrf_token, email };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "verification", objData);
    return res.data.message;
  } catch (error) {
    throw error;
  }
}
