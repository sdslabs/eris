import {React, useState, useEffect} from "react";
import Popup from "./popup";
import defaultFace from "../public/images/default_face.svg"
import PendingUser from "../public/images/pending.svg"
import AcceptedUser from "../public/images/accepted.svg"
import Image from "next/image";

const InvitesTable = ({ invitesData, filterDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}
  const post = invitesData;
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(3);
  
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = post.slice(firstPost, lastPost);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(post.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
  };
  return (
    <div>
      <table className="invites_table">
        <tbody>
        <tr>
          <th style={{width: "20%"}}><b>NAME</b></th>
          <th style={{width:"10%"}}></th>
          <th style={{width: "25%"}}><b>EMAIL</b></th>
          <th style={{width: "10%"}}><b>ROLE</b></th>
          <th style={{width: "10%"}}><b>DATE INVITED</b></th>
          <th style={{width: "10%"}}><b>INVITED BY</b></th>
          <th style={{width: "10%"}}><b>GITHUB</b></th>
          <th style={{width: "5%"}}></th>
        </tr>
         {currentPost.map((Val) => {
                return (
                  <>
                    <tr key={Val.id} className="invites_data">
                      <td style={{verticalAlign: "middle"}}> <Image src={defaultFace}/> {Val.name}</td> 
                      <td>{isPending(Val.invitestatus)} </td>
                      <td> {Val.email} </td>
                      <td> {Val.role} </td>
                      <td> {Val.date} </td>
                      <td> {Val.invitedby} </td>
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

function isPending (userstatus) {
  if (userstatus==0) {
    // banned user
    return <Image src={PendingUser} alt="pending user"/>;
  }
  else return <Image src={AcceptedUser} alt="accepted user"/>;
}

export default InvitesTable;
