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
    try {
      const res = await handleCreateIdentityFlow(name, phoneNumber, email, role);
      alert("Created account successfully");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setRole("admin");
      dispatch({ type: "showAddUserForm" });
    } catch (error) {
      console.error(error);
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
      <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      <label>Email</label>
      <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
      <label>Phone Number</label>
      <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
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
