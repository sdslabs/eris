import axiosInstance from "./axiosInstance";

export async function handleGetIdentitiesFlow() {
  try {
    const getResponse = await axiosInstance.get(process.env.NEXT_PUBLIC_NYMERIA + "list-identity");
    return getResponse.data.identities;
  } catch (error) {
    throw error;
  }
}

export async function handleBanIdentityFlow(identity) {
  try {
    const res = await axiosInstance.put(process.env.NEXT_PUBLIC_NYMERIA + "update-identity/ban", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleDeleteIdentityFlow(identity) {
  try {
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "delete-identity", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleCreateIdentityFlow(name, phone_number, email, role) {
  try {
    const objData = { name, email, phone_number, role, password: "" };
    const res = await axiosInstance.post(process.env.NEXT_PUBLIC_NYMERIA + "create-identity", objData);
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleRemoveBanFlow(identity) {
  try {
    const res = await axiosInstance.put(process.env.NEXT_PUBLIC_NYMERIA + "update-identity/remove-ban", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}

export async function handleRoleSwitchFlow(identity) {
  try {
    const res = await axiosInstance.put(process.env.NEXT_PUBLIC_NYMERIA + "update-identity/switch-roles", { identity });
    return res;
  } catch (error) {
    throw error;
  }
}
