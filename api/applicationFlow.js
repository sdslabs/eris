import axiosInstance from "./axiosInstance";

export async function handleGetAllApplicationsFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "applications");
    return getResponse.data.identities;
  } catch (error) {
    throw error;
  }
}

export async function handleCreateApplicationsFlow(identity) {
  try {
    const res = await axiosInstance.put(process.env.NEXT_PUBLIC_NYMERIA + "applications", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleUpdateApplicationsFlow(identity) {
  try {
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "applications", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleDeleteApplicationFlow(name, phone_number, email, role) {
  try {
    const objData = { name, email, phone_number, role, password: "" };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "applications", objData);
    return res;
  } catch (error) {
    throw error;
  }
}
