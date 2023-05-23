import {React, useState} from "react";
import Export from "../public/images/export.svg"
import Image from "next/image";
import Link from "next/link";
import CopyIcon from "../public/images/copyicon.svg"

const AppBox = ({ img, name, des, href, domains, organisations, clkey, clsecret }) => {

    const [text, setText] = useState("");
    const handleCopyClick = () => {
      navigator.clipboard.writeText(text);
    };

  return (
    <div className="app_box">
      <div className="app_topbox">
        <div className="app_image">
          <Image className="app_image" src={img} alt="test" />
        </div>
        <div className="app_data">
            <p className="app_name" style={{marginTop:"5px"}}><b>{name}</b><span style={{float:"right"}} className="green underline"><b>Edit</b></span></p>
            <p className="app_description">{des}</p>
            <p className="green perm"><Link target={"_blank"} href={href}>{href}</Link><Image style={{margin: "-2px 5px"}} src={Export} alt="export"/></p>
        </div>
      </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Allowed domains</p> <br/>
          <input type="text" value={domains} />
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Organisations</p> <br/>
          <div className="org_div">
          {organisations.map((item, index) => (
            <div key={index} className="org_item">
              {item}
            </div>
          ))}
          </div>
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Client key</p> <br/>
          <div className="copy_div">
          <input
            type="text"
            value={clkey}
            onChange={(e) => setText(e.target.value)}/>
          <Image src={CopyIcon} onClick={handleCopyClick} id="copy_icon"/>
          </div>
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Client secret</p> <br/>
          <div className="copy_div">
          <input
            type="text"
            value={clsecret}
            onChange={(e) => setText(e.target.value)}/>
          <Image src={CopyIcon} onClick={handleCopyClick} id="copy_icon"/>
          </div>
        </div>
    </div>
  );
};

export default AppBox;
