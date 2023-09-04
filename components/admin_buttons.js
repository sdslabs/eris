import React from "react";
import Image from "next/image";

const Buttons = ({ text1, text2, img1, img2 }) => {

  return (

    <div className="buttons">
        <button className="filter_btn">
          <Image style={{marginRight: "8px"}} src={img1} alt="user management" />
            {text1}
        </button>
        <button className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={img2} alt="user management" />
            {text2}
        </button>
    </div>

  );
};

export default Buttons;

