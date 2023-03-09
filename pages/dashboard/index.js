import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

    let sendRequest = async () => {
      try {
        const getResponse = await axios.get(process.env.NEXT_PUBLIC_LOGOUT, {
          withCredentials: true,
        });
        console.log(getResponse.data.logoutToken);
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
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
    <div>
    <button onClick={sendRequest}>
        Logout
    </button>
    </div>
  );
};

export default Dashboard;

