import axiosInstance from "./axiosInstance";

export async function handleGetLoginFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "login");

    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    return { flowID, csrf_token };
  } catch (error) {
    throw error;
  }
}

export async function handlePostLoginFlow(flowID, csrf_token, email, password) {
  try {
    const objData = { flowID, csrf_token, password, identifier: email };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "login", objData);
    return res.data;
  } catch (error) {
    throw error;
  }
}
