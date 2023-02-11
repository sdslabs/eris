import React from "react";

const Popup = props => {
  return (
    <div className="popup_box">
      <div className="box">
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
