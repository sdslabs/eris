import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {

    const [LogoutToken, setLogoutToken] = useState("");

    let sendRequest = async (e) => {
      e.preventDefault();
      try {
        let res = await axios(process.env.NEXT_PUBLIC_LOGOUT, {
          method: "POST",
          body: JSON.stringify({
            logoutToken: LogoutToken
          }),
        });
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() =>{
        const createFLow= async ()=>{
         const response=await axios.get(process.env.NEXT_PUBLIC_LOGOUT,{withCredentials: true})
         setLogoutToken(response.logoutToken)
        }
        createFLow()
       }, []);

  return (
    <div>
    <button onClick={sendRequest}>
        Logout
    </button>
    </div>
  );
};

export default Dashboard;

