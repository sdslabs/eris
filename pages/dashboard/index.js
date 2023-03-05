import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

    let sendRequest = async () => {
      try {
        const getResponse = await axios.get("http://localhost:9898/logout", {
          withCredentials: true,
        });
        console.log(getResponse.data.logoutToken);
        const res = await axios.post(
          "http://localhost:9898/logout",
          {
            logoutToken: getResponse.data.logoutToken,
            url: "http://localhost:3000/",
          },
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          console.log("logged out");
          //res.redirect("/dashboard")
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

