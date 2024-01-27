import Image from "next/image";
import { React, useState } from "react";
import bannedUser from "../public/images/banned.svg";
import defaultFace from "../public/images/default_face.svg";
import Pagination from "./pagination";
import UserPopup from "./user_mgmt";

function Table({ currentPost }) {
  return (
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
                <td> {Val.state === "inactive" ? <Image src={bannedUser} alt="banned user" /> : null} </td>
                <td> {Val.traits.email} </td>
                <td> {Val.traits.role} </td>
                <td> {Val.traits.github} </td>
                <td>
                  <UserPopup identity={Val} />
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

function UserTable({ userData }) {
  const post = userData;
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage, setPostPerPage] = useState({ value: 2, label: "2/Page" });

  const lastPost = number * postPerPage.value;
  const firstPost = lastPost - postPerPage.value;
  const currentPost = post.slice(firstPost, lastPost);

  return (
    <div>
      <Table currentPost={currentPost} />
      <Pagination
        post={post}
        currentPost={currentPost}
        number={number}
        postPerPage={postPerPage}
        setPostPerPage={setPostPerPage}
        setNumber={setNumber}
      />
    </div>
  );
}

export default UserTable;
