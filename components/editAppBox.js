import {React, useState} from "react";
import Export from "../public/images/export.svg"
import Image from "next/image";
import Link from "next/link";
import CopyIcon from "../public/images/copyicon.svg"

const EditAppBox = ({ img, name, des, href, domains, organisations}) => {

    const [text, setText] = useState("");

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
            <Image className="app_image" src={img} alt="test" />
        </div>
        <div className="app_data">
            <p className="underline"><b>Change Image</b></p>
            <p className="underline">Remove Image</p>
        </div>
      </div>
      <div>
      <select value={dropdownValue} onChange={handleSelect}>
        <option value=""></option>
        <option value="DSG">DSG</option>
        <option value="InfoSec">InfoSec</option>
        <option value="PAG">PAG</option>
        <option value="SDSLabs">SDSLabs</option>
      </select>
      <div>
        {selectedItems.map((item) => (
          <span key={item} className="keyword">
            {item}
            <span className="delete" onClick={() => handleDelete(item)}>
              &#10005;
            </span>
          </span>
        ))}
      </div>
    </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Name</p> <br/>
          <input type="text" value={name} />
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Id</p> <br/>
          <input type="text" value={des} />
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
          <p style={{marginBottom: "-0.5rem"}}>Redirect URL</p> <br/>
          <input type="text" value={href} />
        </div>
        <div className="app_box_children">
          <p style={{marginBottom: "-0.5rem"}}>Allowed domains</p> <br/>
          <input type="text" value={domains} />
        </div>
           <div className="app_box_buttons">
           <button className="cancel_btn">Cancel</button>
           <button className="create_btn">
             Save
           </button>
           </div>
    </div>
  );
};

export default EditAppBox;



