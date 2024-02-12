import axiosInstance from "./axiosInstance";

export async function handleGetRegisterFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "register");

    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    return { flowID, csrf_token };
  } catch (error) {
    throw error;
  }
}

export async function handlePostRegisterFlow(flowID, csrf_token, password, email, name, phone_number) {
  try {
    const objData = { flowID, csrf_token, password, traits: { email, name, phone_number } };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "register", objData);
    return res;
  } catch (error) {
    throw error;
  }
}
