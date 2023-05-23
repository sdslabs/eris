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
        <div className="app_image"><Image className="app_image" src={img} alt="test" /></div>
        <div className="app_data">
            <p className="app_name" style={{marginTop:"5px"}}><b>{name}</b></p>
            <p className="app_description">{des}</p>
            <p className="green underline"><Link target={"_blank"} href={href}>{href}</Link><Image src={Export} alt="export"/></p>
        </div>
      </div>
        <div className="domains">
          <p style={{marginBottom: "-0.5rem"}}>Allowed domains</p> <br/>
          <input type="text" value={domains} />
        </div>
        <div className="organisations">
          <p style={{marginBottom: "-0.5rem"}}>Organisations</p> <br/>
          <div className="org_div">
          {organisations.map((item, index) => (
            <div key={index} className="org_item">
              {item}
            </div>
          ))}
          </div>
        </div>
        <div className="key">
          <p style={{marginBottom: "-0.5rem"}}>Client key</p> <br/>
          <div className="copy_div">
          <input
            type="text"
            value={clkey}
            onChange={(e) => setText(e.target.value)}/>
          <Image src={CopyIcon} onClick={handleCopyClick} id="copy_icon"/>
          </div>
        </div>
        <div className="secret">
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

// import { useState } from "react";

// function DropdownWithKeywords() {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [dropdownValue, setDropdownValue] = useState("");

//   const handleSelect = (event) => {
//     const selectedItem = event.target.value;
//     setSelectedItems([...selectedItems, selectedItem]);
//     setDropdownValue("");
//   };

//   const handleDelete = (itemToDelete) => {
//     const newSelectedItems = selectedItems.filter(
//       (item) => item !== itemToDelete
//     );
//     setSelectedItems(newSelectedItems);
//   };

//   return (
//     <div>
//       <select value={dropdownValue} onChange={handleSelect}>
//         <option value="">--Select an item--</option>
//         <option value="Item 1">Item 1</option>
//         <option value="Item 2">Item 2</option>
//         <option value="Item 3">Item 3</option>
//       </select>
//       <div>
//         {selectedItems.map((item) => (
//           <span key={item} className="keyword">
//             {item}
//             <span className="delete" onClick={() => handleDelete(item)}>
//               &#10005;
//             </span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DropdownWithKeywords;
