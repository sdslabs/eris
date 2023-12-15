import {React, useState} from "react";
import ApplicationsPopup from "./appPop"
import Image from "next/image";
import DefaultImage from "../public/images/default_img.svg"

const NewAppBox = ({ name, des, href, domains, clkey, clsecret, handleAppBox, handleEditAppBox }) => {
  const organisations = ["SDSLabs", "DSG", "PAG", "Infosec"];
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };
  const [selectedItems, setSelectedItems] = useState([]);
  const [organisationsToUse, setOrganisationsState] = useState(organisations);
  const [dropdownValue, setDropdownValue] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // For storing selected image

  const handleSelect = (event) => {
    const selectedItem = event.target.value;
    var organisationsCurrent = organisationsToUse
    var index = organisationsCurrent.indexOf(selectedItem);
    if (index !== -1) {
      organisationsCurrent.splice(index, 1);
    }
    setOrganisationsState(organisationsCurrent)
    setSelectedItems([...selectedItems, selectedItem]);
    setDropdownValue("");
  };

  const handleDelete = (itemToDelete) => {
    const newSelectedItems = selectedItems.filter(
      (item) => item !== itemToDelete
    );
    var organisationsCurrent = organisationsToUse
    organisationsCurrent.push(itemToDelete)
    setOrganisationsState(organisationsCurrent)
    setSelectedItems(newSelectedItems);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file)); // Store the selected image URL
    }
  };

  return (
    <div className="app_box">
        <div className="app_topbox">
        <div className="app_image">
          {selectedImage ? (
            <img
              className="app_image"
              src={selectedImage}
              alt="uploaded"
              style={{ maxWidth: "100%" }}
            />
          ) : (
            <Image className="app_image" src={DefaultImage} alt="test" />
          )}
        </div>
        <div className="new_app_data">
          <label htmlFor="imageUpload" className="underline">
            <b>Upload Image</b>
          </label>
          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
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
                <span className="delete_org" onClick={() => handleDelete(item)}>
                  &#10005;
                </span>
              </span>
            ))}
            <div className="org_select_container">
              <select
                className="org_div_select"
                value={dropdownValue}
                onChange={handleSelect}>
                <option value=""></option>
                {(() => { 
                var index = organisationsToUse.indexOf("DSG");
                if (index !== -1) {
                return <option value="DSG">DSG</option>}})()}
                {(() => { 
                var index = organisationsToUse.indexOf("Infosec");
                if (index !== -1) {
                return <option value="Infosec">Infosec</option>}})()}
                {(() => { 
                var index = organisationsToUse.indexOf("PAG");
                if (index !== -1) {
                return <option value="PAG">PAG</option>}})()}
                {(() => { 
                var index = organisationsToUse.indexOf("SDSLabs");
                if (index !== -1) {
                return <option value="SDSLabs">SDSLabs</option>}})()}
              </select>
              <span className="org_arrow">&#9660;</span>
            </div>
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
            <button
              style={{cursor: "pointer"}}
              onClick={()=>{handleAppBox(), handleEditAppBox()}}
              className="cancel_btn">
                Cancel
            </button>
            <button
              style={{cursor: "pointer"}}
              className="create_btn"
              onClick={()=>{handleClick, handleAppBox(), handleEditAppBox()}}>
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
