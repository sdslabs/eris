import { React, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Dashboard = () => {
  const [logoutError, setLogoutError] = useState("");

  let sendRequest = async () => {
    try {
      const getResponse = await axios.get(process.env.NEXT_PUBLIC_LOGOUT, {
        withCredentials: true,
      });
      const res = await axios.post(
        process.env.NEXT_PUBLIC_LOGOUT,
        {
          logoutToken: getResponse.data.logoutToken,
          url: process.env.NEXT_PUBLIC_REDIRECT,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        console.log("logged out");
        return true;
      } else {
        setMessage("Some error occured");
        setLogoutError("Logout failed. Try again.");
        return false;
      }
    } catch (err) {
      console.log(err);
      setLogoutError("Logout failed. Try again.");
      return false;
    }
  };

  const router = useRouter();
  const redirect = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="active">
        <Link className=" underline green" href="/settings" style={{ float: "right" }}>
          Settings
        </Link>
        <button
          className="button_submit"
          onClick={async () => {
            if (await sendRequest()) {
              console.log("redirect");
              redirect();
            } else {
              console.log("error");
            }
          }}
        >
          Logout
        </button>
        <p className="text-danger">{logoutError}</p>
      </div>
    </div>
  );
};

export default Dashboard;
