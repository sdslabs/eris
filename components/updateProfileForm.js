import { useEffect, useState } from "react";
import { handleGetSessionDetailsFlow } from "../api/profileFlow";
import { handlePostUpdateProfileFlow } from "../api/settingsFlow";
import ButtonSubmit from "./button_submit";

function UpdateProfileForm({ flowID, csrf_token }) {
  const [traits, setTraits] = useState({});

  useEffect(() => {
    handleGetTraits();
  }, []);

  async function handleGetTraits() {
    try {
      const profileTraits = await handleGetSessionDetailsFlow();
      setTraits(profileTraits);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateButton() {
    try {
      const res = await handlePostUpdateProfileFlow(flowID, csrf_token, traits);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        onChange={(e) =>
          setTraits((t) => {
            return { ...t, name: e.target.value };
          })
        }
        value={traits.name}
      />
      <label>Email</label>
      <input
        type="text"
        onChange={(e) =>
          setTraits((t) => {
            return { ...t, email: e.target.value };
          })
        }
        value={traits.email}
      />
      <label>Phone Number</label>
      <input
        type="number"
        onChange={(e) =>
          setTraits((t) => {
            return { ...t, phone_number: e.target.value };
          })
        }
        value={traits.phone_number}
      />
      <label>Verification Status: </label>
      {traits.verified ? "Verified" : "Not verified"}

      <ButtonSubmit
        text="Update Profile"
        func={handleUpdateButton}
        email={traits.email}
        password={traits.name}
        confirmPassword={traits.phone_number}
      />
    </div>
  );
}

export default UpdateProfileForm;
