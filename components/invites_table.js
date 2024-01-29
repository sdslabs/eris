import {React, useState, useEffect} from "react";
import Select from "react-select";
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
  const [postPerPage, setPostPerPage] = useState({ value: 2, label: "2/Page" });
  const options = [
    {
      value: 2,
      label: "2/Page",
    },
    {
      value: 5,
      label: "5/Page",
    },
    {
      value: 10,
      label: "10/Page",
    },
    {
      value: 20,
      label: "20/Page",
    },
  ];

  const lastPost = number * postPerPage.value;
  const firstPost = lastPost - postPerPage.value;
  const currentPost = post.slice(firstPost, lastPost);
  var pageNumberArr = [];

  const numberOfPages = Math.ceil(post.length / postPerPage.value);
  var left = 1;
  var right = Math.min(left + 4, numberOfPages);
  for (var i = left; i <= right; i++) {
    pageNumberArr.push(i);
  }
  const ChangePage = (pageNumber) => {
    if (pageNumber > numberOfPages || pageNumber < 1) {
      return;
    }
    if (pageNumber >= left && pageNumber <= right) {
      setNumber(pageNumber);
    } else if (pageNumber < left) {
      pageNumberArr = [];
      right = pageNumber;
      left = Math.max(right - 4, 1);
      for (var i = left; i <= right; i++) {
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    } else if (pageNumber > right) {
      pageNumberArr = [];
      left = pageNumber;
      right = Math.min(left + 4, numberOfPages);
      for (var i = left; i <= right; i++) {
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    }
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
      <div className="page_control">
        <div className="item_count">Total {currentPost.length} items</div>
        <div className="pagination">
          <button className="page_change" onClick={() => ChangePage(1)}>
            {"Jump to First"}
          </button>
          <button className="page_change" onClick={() => ChangePage(number - 1)}>
            {"<"}
          </button>
          {pageNumberArr.map((Elem) => {
            return (
              <>
                <button className={classgenerator(Elem)} onClick={() => ChangePage(Elem)}>
                  {Elem}
                </button>
              </>
            );
          })}
          <button className="page_change" onClick={() => ChangePage(number + 1)}>
            {">"}
          </button>
          <button className="page_change" onClick={() => ChangePage({ numberOfPages })}>
            {"Jump to Last"}
          </button>
        </div>
        <div className="dropdown">
          <Select defaultValue={postPerPage} onChange={setPostPerPage} options={options} />
        </div>
        <div className="go_to_page">
          Go To
          <input className="page_input" type="text" onChange={(e) => ChangePage(Number(e.target.value))} />
        </div>
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
