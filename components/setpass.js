import ButtonSubmit from "./button_submit";
import PasswordValidation from "./passwordValidation";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
const SetPassword = ({name, number, email,setEmail,setName, setNumber}) => {
    const [passwordInput, setPasswordInput]= useState({
        password:'',
        confirmPassword:''
    })
    const func = async (event) =>{
        event.preventDefault()
        const response = await axios.get("http://localhost:9898/register",{withCredentials: true});
        try{
            let res= await axios.post("http://localhost:9898/register",{
                body: {
                    csrf_token: response.data.csrf_token,
                    flowID: response.data.flowID,
                    password:passwordInput.password,
                    traits:{
                        email:email,
                        number:number,
                        name:name
                    }
                }
            },{withCredentials: true})
            if( res.status == 200){
                setPasswordInput({
                    password:'',
                    confirmPassword:''
                });
                setEmail("");
                setName("");
                setNumber("");
            } else{
                console.log("error")
            }
        }catch(err){
            console.log(err);
        }
    };
  return (
    <div className="slide-in">
      <div>
        <h1>Set <span className="green">Password</span></h1>
      </div>
      <div className="form">
        <PasswordValidation passwordInput={passwordInput} setPasswordInput={setPasswordInput} />
      </div>
      <div>
        <ButtonSubmit
          text={"Confirm"} func={func} password={passwordInput.password} confirmed={passwordInput.confirmPassword}/>
      </div>
    </div>
  );
};

export default SetPassword;
