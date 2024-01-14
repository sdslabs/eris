import { useState } from "react";
import Select from "react-select";
import { handleCreateIdentityFlow } from "../api/adminFlow";
import ButtonSubmit from "./button_submit";

function AddUserForm({ dispatch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState("admin");

  async function handleCreateAccount() {
    const res = await handleCreateIdentityFlow(name, phoneNumber, email, role);
    if (res.status === "success") {
      alert("Created account successfully");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setRole("admin");
      dispatch({ type: "showAddUserForm" });
    }
  }

  const options = [
    {
      value: "admin",
      label: "Admin",
    },
    {
      value: "user",
      label: "User",
    },
  ];

  return (
    <div>
      <label>Name</label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <label>Email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} />
      <label>Phone Number</label>
      <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
      <label>Role</label>
      <Select
        defaultValue={{
          value: "admin",
          label: "Admin",
        }}
        onChange={(e) => setRole(e.value)}
        options={options}
      />
      <ButtonSubmit text="Create Account" func={handleCreateAccount} email={email} />
    </div>
  );
}

export default AddUserForm;