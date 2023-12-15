import { useState } from "react";
import Image from "next/image";

const Apps = ({ img, name, active, onClick }) => {
  return (
    <div
      className={`app_div ${active ? "active_app_div" : ""}`}
      onClick={onClick}
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

const ApplicationList = ({ imgList, list }) => {
  const [activeAppId, setActiveAppId] = useState(null);

  const handleAppClick = (appId) => {
    setActiveAppId(appId === activeAppId ? null : appId);
  };

  return (
    <div className="application_list">
      {list.map((appName, index) => (
        <Apps
          key={index}
          img={imgList[index]}
          name={appName}
          active={activeAppId === index}
          onClick={() => handleAppClick(index)}
        />
      ))}
    </div>
  );
};

export default ApplicationList;
