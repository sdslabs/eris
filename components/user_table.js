import {React, useState, useEffect} from "react";
import Popup from "./popup";
import Data from "../data/users_data.json"

const UserTable = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {setIsOpen(!isOpen);}

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
  var pageNumberArr = [];

  const numberOfPages=Math.ceil(post.length / postPerPage);
  var left=1;
  var right=Math.min(left+4, numberOfPages);
  for(var i=left; i<=right; i++){
    pageNumberArr.push(i);
  }
  const ChangePage = (pageNumber) => {
    if(pageNumber>numberOfPages || pageNumber<1){
      return;
    }
    if(pageNumber>=left && pageNumber<=right){
      setNumber(pageNumber);
    }
    else if(pageNumber<left){
      pageNumberArr=[]
      right=pageNumber;
      left=Math.max(right-4, 1);
      for(var i=left; i<=right; i++){
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    }
    else if(pageNumber>right){
      pageNumberArr=[]
      left=pageNumber;
      right=Math.min(left+4, numberOfPages);
      for(var i=left; i<=right; i++){
        pageNumberArr.push(i);
      }
      setNumber(pageNumber);
    }
  };
  const classgenerator = (elem) => {
    if(elem===number){
      return "page_change_selected";
    }else{
      return "page_change";
    }
  }
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
        <div className="pagination" >
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
       </div>
    </div>
  );
};

export default UserTable;

