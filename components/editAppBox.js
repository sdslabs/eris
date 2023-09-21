import {React, useState} from "react";
import Export from "../public/images/export.svg"
import Image from "next/image";
import Link from "next/link";
import CopyIcon from "../public/images/copyicon.svg"

const EditAppBox = ({ img, name, des, href, domains, organisations, handleAppBox}) => {

  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [organisationsToUse, setOrganisationsState] = useState(organisations);

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
    const newSelectedItems = selectedItems.filter((item) => item !== itemToDelete);
    var organisationsCurrent = organisationsToUse
    organisationsCurrent.push(itemToDelete)
    setOrganisationsState(organisationsCurrent)
    setSelectedItems(newSelectedItems);
  };

  const handleChangeImage = (event) => {
    const newImageFile = event.target.files[0];

    if (newImageFile) {
      setImage(URL.createObjectURL(newImageFile));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="app_box">
      <div className="app_topbox">
        <div className="app_image">
          {image ? (
            <img className="app_image" src={image} alt="test" />
          ) : (
            <Image className="app_image" src={img} alt="test" />
          )}
        </div>
        <div className="app_data">
          <label htmlFor="changeImage" className="underline">
            <b>Change Image</b>
          </label>
          <input
            type="file"
            id="changeImage"
            accept="image/*"
            onChange={handleChangeImage}
            style={{ display: "none" }}
          />
          <br />
          <label className="underline" onClick={handleRemoveImage} style={{ cursor: "pointer" }}>
            Remove Image
          </label>
        </div>
      </div>
      <div>
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
          {selectedItems.map((item) => (
              <span key={item} className="org_item">
                {item}
                <span className="delete_org" onClick={() => handleDelete(item)}>
                  &#10005;
                </span>
              </span>
            ))}
          <div className="org_select_container">
          <select className="org_div_select"
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
          </div>
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
          <button style={{cursor:"pointer"}} onClick={()=>handleAppBox()} className="cancel_btn">
            Cancel
          </button>
          <button style={{cursor:"pointer"}} onClick={()=>handleAppBox()} className="create_btn">
            Save
          </button>
          </div>
    </div>
  );
};

export default EditAppBox;




