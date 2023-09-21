import {React, useState, useEffect} from "react";
import Popup from "./popup";
import {currentData} from "./searchbaradmin.js"
import defaultFace from "../public/images/default_face.svg"
import bannedUser from "../public/images/banned.svg"
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

const UserTable = ({ userData, filterDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}

  const post = userData;
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(3);
  
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }
  const mTop = filterDropDown? "0%":"0%";
  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <div style={{ marginTop:mTop}}>
      <table className="user_table">
        <tbody>
        <tr>
          <th style={{width: "25%"}}><b>NAME</b></th>
          <th style={{width:"10%"}}></th>
          <th style={{width: "30%"}}><b>EMAIL</b></th>
          <th style={{width: "10%"}}><b>ROLE</b></th>
          <th style={{width: "20%"}}><b>GITHUB</b></th>
          <th style={{width: "5%"}}></th>
        </tr>
         {currentPost.map((Val) => {
                return (
                  <>
                    <tr key={Val.id} className="users_data">
                      <td style={{verticalAlign: "middle"}}> <Image src={defaultFace}/> {Val.name}</td> 
                      <td>{isBanned(Val.userstatus)} </td>
                      <td> {Val.email} </td>
                      <td> {Val.role} </td>
                      <td> {Val.github} </td>
                      <td>
                        <input
                          className="popup_button"
                          type="button"
                          value=":"
                          onClick={togglePopup}
                        />
                        {isOpen && <Popup content={
                        <>
                          <div className="popup_content">Remove user</div>
                          <div className="popup_content">Ban user</div>
                          <div className="popup_content">Make user</div>
                        </>
                        }
                        handleClose={togglePopup}
                        />}
                      </td>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </table>
      <div>
            <button onClick={() => setNumber(number - 1)}>
              Previous
            </button>
            {pageNumber.map((Elem) => {
              return (
                <>
                  <button onClick={() => ChangePage(Elem)}>
                    {Elem}
                  </button>
                </>
              );
            })}
            <button onClick={() => setNumber(number + 1)}>
              Next
            </button>
            
          </div>
    </div>
  );
};

function isBanned (userstatus) {
  if (userstatus==0) {
    // banned user
    return <Image src={bannedUser} alt="banned user"/>;
  }
}

export default UserTable;

