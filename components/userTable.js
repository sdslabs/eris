import Image from "next/image";
import { React, useState } from "react";
import Select from "react-select";
import bannedUser from "../public/images/banned.svg";
import defaultFace from "../public/images/default_face.svg";
import UserPopup from "./user_mgmt";

function UserTable({ userData }) {
  const post = userData;
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

  function classgenerator(elem) {
    if (elem === number) {
      return "page_change_selected";
    } else {
      return "page_change";
    }
  }

  return (
    <div>
      <table className="user_table">
        <tbody>
          <tr>
            <th style={{ width: "25%" }}>
              <b>NAME</b>
            </th>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "30%" }}>
              <b>EMAIL</b>
            </th>
            <th style={{ width: "10%" }}>
              <b>ROLE</b>
            </th>
            <th style={{ width: "20%" }}>
              <b>GITHUB</b>
            </th>
            <th style={{ width: "5%" }}></th>
          </tr>
          {currentPost.map((Val) => {
            return (
              <>
                <tr key={Val.id} className="users_data">
                  <td style={{ verticalAlign: "middle" }}>
                    {" "}
                    <Image src={defaultFace} alt="profile" /> {Val.traits.name}
                  </td>
                  <td>{isBanned(Val.state)} </td>
                  <td> {Val.traits.email} </td>
                  <td> {Val.traits.role} </td>
                  <td> {Val.traits.github} </td>
                  <td>
                    <UserPopup identityId={Val.id} />
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
}

function isBanned(userstatus) {
  if (userstatus == "inactive") {
    // banned user
    return <Image src={bannedUser} alt="banned user" />;
  }
}

export default UserTable;
