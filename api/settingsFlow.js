import axiosInstance from "./axiosInstance";

export async function handleGetSettingsFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "settings");
    const flowID = getResponse.data.flowID;
    const csrf_token = getResponse.data.csrf_token;
    const qr = getResponse.data.qr;
    const totp_secret = getResponse.data.totp_secret;
    return { flowID, csrf_token, qr, totp_secret };
  } catch (error) {
    throw error;
  }
}

export async function handlePostToggleTOTPFlow(flowID, csrf_token, totp_code, totp_unlink) {
  try {
    const objData = { csrf_token, totp_code, flowID, totp_unlink };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "toggletotp", objData);
    return res.data.status;
  } catch (error) {
    throw error;
  }
}

export async function handlePostChangePasswordFlow(flowID, csrf_token, password) {
  try {
    const objData = { csrf_token, flowID, password };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "changepassword", objData);
    return res.data.status;
  } catch (error) {
    throw error;
  }
}

export async function handlePostUpdateProfileFlow(flowID, csrf_token, traits) {
  try {
    const objData = { csrf_token, flowID, traits };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "updateprofile", objData);
    return res.data.status;
  } catch (error) {
    throw error;
  }
}
