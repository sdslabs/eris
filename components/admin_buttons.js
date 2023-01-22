import React from "react";
import UserAdd from "../public/images/user_add.svg"
import Filter from "../public/images/filter.svg"
import Image from "next/image";

const Buttons = ({ text }) => {

  return (

    <div className="buttons">
        <button className="filter_btn">
        <   Image style={{marginRight: "8px"}} src={Filter} alt="user management" />
                Filter
        </button>
        <button className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={UserAdd} alt="user management" />
            Add User
        </button>
    </div>

  );
};

export default Buttons;

