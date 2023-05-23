import {React, useState} from "react";
import ApplicationsPopup from "./appPop"
import Export from "../public/images/export.svg"
import Image from "next/image";
import DefaulImage from "../public/images/default_img.svg"
import Link from "next/link";
import CopyIcon from "../public/images/copyicon.svg"

const NewAppBox = ({ img, name, des, href, domains, organisations, clkey, clsecret }) => {

    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(true);
      };
    const [selectedItems, setSelectedItems] = useState([]);
    const [dropdownValue, setDropdownValue] = useState("");

    const handleSelect = (event) => {
        const selectedItem = event.target.value;
        setSelectedItems([...selectedItems, selectedItem]);
        setDropdownValue("");
    };

    const handleDelete = (itemToDelete) => {
        const newSelectedItems = selectedItems.filter(
        (item) => item !== itemToDelete
        );
        setSelectedItems(newSelectedItems);
    };

  return (
    <div className="app_box">
       <div className="app_topbox">
         <div className="app_image">
             <Image className="app_image" src={DefaulImage} alt="test" />
         </div>
         <div className="new_app_data">
             <p className="underline"><b>Upload Image</b></p>
         </div>
       </div>
         <div className="app_box_children">
           <p style={{marginBottom: "-0.5rem"}}>Name</p> <br/>
           <input type="text" placeholder={name} />
         </div>
         <div className="app_box_children">
           <p style={{marginBottom: "-0.5rem"}}>Id</p> <br/>
           <input type="text" placeholder={des} />
         </div>
         <div className="app_box_children">
           <p style={{marginBottom: "-0.5rem"}}>Organisations</p><br/>
          <div className="org_div">
          {selectedItems.map((item) => (
          <span key={item} className="org_item">
            {item}
            <span
                className="delete_org"
                onClick={() => handleDelete(item)}>
              &#10005;
            </span>
          </span>
        ))}
        <select
          className="org_div_select"
          value={dropdownValue}
          onChange={handleSelect}>
            <option value=""></option>
            <option value="DSG">DSG</option>
            <option value="InfoSec">InfoSec</option>
            <option value="PAG">PAG</option>
            <option value="SDSLabs">SDSLabs</option>
      </select>
          </div>
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Redirect URL</p> <br/>
          <input type="text" placeholder={href} />
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Allowed domains</p> <br/>
          <input type="text" placeholder={domains} />
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Client key</p> <br/>
          <input
            type="text"
            placeholder={clkey}/>
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Client secret</p> <br/>
          <input
            type="text"
            placeholder={clsecret}/>
        </div>
        <div className="app_box_buttons">
            <button className="cancel_btn">Cancel</button>
            <button className="create_btn" onClick={handleClick}>
                Create
            </button>
        </div>

        <ApplicationsPopup
        clicks= {click}
        name={"Whatever"}/>
    </div>
  );
};

export default NewAppBox;
