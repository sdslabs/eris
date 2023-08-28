import ButtonSubmit from "../../components/button_submit";
import axios from "axios";
import Input from "../../components/input_box";
import Labs from "../../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "../../components/carousel";
import { React, useState } from "react";
import { Button } from "@mui/material";

const RecoveryPage = () => {
    const [inputActive1, setInputActive1] = useState(false);
    const [email, resetPassword] = useState("");

    let sendRequest = async () => {
        try {
          const getResponse = await axios.get(process.env.NEXT_PASSWORD_RESET, {
            withCredentials: true,
          });
          const res = await axios.post(
            process.env.NEXT_PASSWORD_RESET,
            {
              flowID: getResponse.data.flowID,
              csrf_token: getResponse.data.csrf_token,
              identifier: email,
              method:"",
            },
            {
              withCredentials: true,
            }
          );
          if (res.status === 200) {
            resetPassword("");
            console.log("reset link sent");
            return true
          } else {
            setMessage("some error occured");
            return false
          }
        } catch (err) {
          console.log(err);
          return false
        }
      };
    
  return (
<div>
    <div className="split_left">
        <div className="top">
            <Image src={Labs} alt="labs" />
        </div>
        <div className="centred_img">
        <Carousel />
        </div>
    </div>
    <div className="split_right">
        <div className="login">
            <div>
                <h1>Reset <span className="green">Password</span></h1>
            </div>
            <div className="form">
                <div>
                    <p>Email address</p>
                    <div className={"inputBox" + " " + inputActive1}>
                        <input
                        type="text"
                        onFocus={() => setInputActive1(!inputActive1)}
                        onBlur={() => setInputActive1(!inputActive1)}
                        className="input"
                        placeholder="Enter your registered email address"
                        value={email}
                        onChange={(e) => resetPassword(e.target.value)}
                        ></input>
                    </div>
                </div>
                <div>
                    <button 
                        type="submit"
                        text={"Send reset link"}
                        className="button_submit"
                        onClick={async ()=>{
                            console.log("request created")
                            if(await sendRequest()){
                              console.log("redirect");
                               redirect();
                            }else{
                              console.log("error")
                            }
                          }}
                    >
                    Send reset link
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default RecoveryPage;

