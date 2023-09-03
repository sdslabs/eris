import ButtonSubmit from "./button_submit";
import Input from "./input_box";
import Labs from "../public/images/labs logo.png";
import Image from "next/image";
import Carousel from "./carousel";
import AddUserImg from "../public/images/AddUserImg.svg"

const AddUser = () => {
  return (
    <>
    <div>
    <p align="center">Invite member</p>
    </div>
<div>
    <div className="split_left">
        <div className="top">
            <Image src={AddUserImg} alt="labs" />
        </div>
        <div className="centred_img">
        <Carousel />
        </div>
    </div>
    <div className="split_right">
        
            <div className="form">
                <div>
                    <p>Full name</p>
                    <Input
                        text={"Enter your full name"}
                    />
                </div>
                <div>
                    <p>Email address</p>
                    
                    <Input
                        text={"Enter your registered email address"}
                    />
                </div>
                <div>
                    <p>Role</p>
                <input type="radio" style={{ marginLeft: "1rem" }} id="admin_role" onChange={()=>{setAdminChecked(); AdminRole()}}/> Admin
        <input type="radio" style={{ marginLeft: "2rem" }} id="user_role" onChange={()=>{setUserChecked(); AdminRole()}}/> User
      </div>
                <div>
                    <ButtonSubmit
                        align="left"
                        text={"Invite"}
                    />
                </div>
            
        </div>
    </div>
</div></>
  );
};

export default AddUser;

