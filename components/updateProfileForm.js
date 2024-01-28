import Link from "next/link";
import { useRouter } from "next/router";
import { handlePostUpdateProfileFlow } from "../api/settingsFlow";
import Input from "../components/input_box";
import ButtonSubmit from "./button_submit";

function UpdateProfileForm({ flowID, csrf_token, traits, setTraits }) {
  const router = useRouter();

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
      <div style={{ marginTop: "2em" }}>
        <h1>
          Update <span className="green">Profile</span>
        </h1>
      </div>
      <div className="form" style={{ marginTop: "0.3em" }}>
        <div style={{ margin: "1em" }}>
          <p>Full name</p>
          <Input
            type="text"
            text="Enter your full name"
            value={traits.name}
            handleChange={(e) =>
              setTraits((t) => {
                return { ...t, name: e.target.value.trim() };
              })
            }
          />

          <p>Email address</p>
          <Input
            type="text"
            text="Enter your email address"
            value={traits.email}
            handleChange={(e) =>
              setTraits((t) => {
                return { ...t, email: e.target.value.trim() };
              })
            }
          />

          <p>Phone Number</p>
          <Input
            type="number"
            text="Enter your Phone Number"
            value={traits.phone_number}
            handleChange={(e) =>
              setTraits((t) => {
                return { ...t, phone_number: e.target.value.trim() };
              })
            }
          />
          <div style={{ margin: "0.8em 0em 0.8em 0em" }}>
            <span>Verification Status: </span>
            {traits.verified ? (
              <span className="green">Verified</span>
            ) : (
              <>
                <span className="red">Not verified</span>{" "}
                <button
                  className="transparent_btn"
                  onClick={() =>
                    router.push({ pathname: "/verifyEmail", query: { email: traits.email } }, "verifyEmail")
                  }
                >
                  Verify Now
                </button>
              </>
            )}
          </div>
          <div style={{ color: "blue", fontSize: "1.1em" }}>
            <Link href="/passwordReset">Change Password</Link>
          </div>
        </div>
        <div>
          <ButtonSubmit
            text="Update Profile"
            func={handleUpdateButton}
            email={traits.email}
            password={traits.name}
            confirmPassword={traits.phone_number}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UpdateProfileForm;
