import { useState } from "react";
import Image from "next/image";

const Apps = ({ id, img, name }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={`app_div ${active ? "active_app_div" : ""}`}
      onClick={handleClick}
    >
      <div className="app_img">
        <Image className="app_img" src={img} alt="app_img" />
      </div>
      <p className="app_name">
        <b>{name}</b>
      </p>
    </div>
  );
};

export default Apps;
