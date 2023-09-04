import {React, useState, useEffect} from "react";
import Data from "../data/users_data.json"
import UserPopup from "./user_mgmt";

const UserTable = () => {
  const [post, setPost] = useState([]);
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(2);

  useEffect(() => {
    const fetchApi = async () => {
      const data = Data;
      setPost(data);
    };
    fetchApi();
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
          <th style={{width: "30%"}}><b>NAME</b></th>
          <th style={{width: "35%"}}><b>EMAIL</b></th>
          <th style={{width: "10%"}}><b>ROLE</b></th>
          <th style={{width: "20%"}}><b>GITHUB</b></th>
          <th style={{width: "5%"}}></th>
        </tr>
         {currentPost.map((Val) => {
                return (
                  <>
                    <tr key={Val.id} className="users_data">
                      <td> {Val.name} </td>
                      <td> {Val.email} </td>
                      <td> {Val.role} </td>
                      <td> {Val.github} </td>
                      <td>
                        <UserPopup />
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

export default UserTable;

