import React from "react";
import Image from "next/image";

const Buttons = ({ filter_text, addu_text, filter_image, addu_image }) => {

  return (

    <div className="buttons">
        <button className="filter_btn">
          <Image style={{marginRight: "8px"}} src={filter_image} alt="user management" />
            {filter_text}
        </button>
        <button className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={addu_image} alt="user management" />
            {addu_text}addu_image
        </button>
    </div>

  );
};

export default Buttons;

