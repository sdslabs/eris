import React, { useState } from "react";
import Image from "next/image";

const Buttons = ({ text1, text2, img1, img2, sort, handleAppBox, handleEditAppBox}) => {

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="buttons">
        <button
        style={{cursor: "pointer"}}
        className="filter_btn"
        onClick={handleOpenPopup}>
          <Image style={{marginRight: "8px"}} src={img1} alt="user management" />
            {text1}
        </button>
        {showPopup && (
        <div className="sort_popup">
            <div className="content" onClick={() => {sort('asc'), setShowPopup(!showPopup);}}>A to Z</div>
            <div className="content" onClick={() => {sort('desc'), setShowPopup(!showPopup);}}>Z to A</div>
        </div>
      )}
        <button
        style={{cursor: "pointer"}}
        onClick={()=>{handleAppBox(), handleEditAppBox()}}
        className="add_user_btn">
            <Image style={{marginRight: "8px"}} src={img2} alt="user management" />
            {text2}
        </button>
    </div>
  );
};

export default Buttons;
