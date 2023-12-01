import { React, useState, useEffect } from "react";
import Popup from "./popup";
import axios from "axios";

const UserTable = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(2);

  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_LIST).then((response) => {
      const data = response.data.identities;
      console.log(data);
      setPost(data);
    });
  }, []);

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
      <table className="user_table">
        <tbody>
          <tr>
            <th style={{ width: "30%" }}>
              <b>NAME</b>
            </th>
            <th style={{ width: "35%" }}>
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
                  <td> {Val.traits.name} </td>
                  <td> {Val.traits.email} </td>
                  <td> {Val.traits.role} </td>
                  <td> {Val.traits.github} </td>
                  <td>
                    <input className="popup_button" type="button" value=":" onClick={togglePopup} />
                    {isOpen && (
                      <Popup
                        content={
                          <>
                            <div className="popup_content">Remove user</div>
                            <div className="popup_content">Ban user</div>
                            <div className="popup_content">Make user</div>
                          </>
                        }
                        handleClose={togglePopup}
                      />
                    )}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <div>
        <button onClick={() => setNumber(number - 1)}>Previous</button>
        {pageNumber.map((Elem) => {
          return (
            <>
              <button onClick={() => ChangePage(Elem)}>{Elem}</button>
            </>
          );
        })}
        <button onClick={() => setNumber(number + 1)}>Next</button>
      </div>
    </div>
  );
};

export default UserTable;
