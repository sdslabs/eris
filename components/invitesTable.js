import Image from "next/image";
import { React, useState } from "react";
import AcceptedUser from "../public/images/accepted.svg";
import defaultFace from "../public/images/default_face.svg";
import PendingUser from "../public/images/pending.svg";
import Pagination from "./pagination";
import UserPopup from "./user_mgmt";

function Table({ currentPost }) {
  return (
    <table className="invites_table">
      <tbody>
        <tr>
          <th style={{ width: "20%" }}>
            <b>NAME</b>
          </th>
          <th style={{ width: "10%" }}></th>
          <th style={{ width: "25%" }}>
            <b>EMAIL</b>
          </th>
          <th style={{ width: "10%" }}>
            <b>ROLE</b>
          </th>
          <th style={{ width: "10%" }}>
            <b>DATE INVITED</b>
          </th>
          <th style={{ width: "10%" }}>
            <b>INVITED BY</b>
          </th>
          <th style={{ width: "10%" }}>
            <b>GITHUB</b>
          </th>
          <th style={{ width: "5%" }}></th>
        </tr>
        {currentPost.map((Val) => {
          return (
            <>
              <tr key={Val.id} className="invites_data">
                <td style={{ verticalAlign: "middle" }}>
                  {" "}
                  <Image src={defaultFace} alt="" /> {Val.traits.name}
                </td>
                <td>
                  {Val.traits.invite_status === "pending" ? (
                    <Image src={PendingUser} alt="pending user" />
                  ) : (
                    <Image src={AcceptedUser} alt="accepted user" />
                  )}{" "}
                </td>
                <td> {Val.traits.email} </td>
                <td> {Val.traits.role} </td>
                <td> {Val.traits.date} </td>
                <td> {Val.traits.invitedby} </td>
                <td>
                  <UserPopup identityId={Val.id} />
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}

function InvitesTable({ invitesData }) {
  const post = invitesData;
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

export default InvitesTable;
