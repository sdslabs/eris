import {React, useState, useEffect} from "react";
import UserPopup from "./user_mgmt";
import Popup from "./popup";
import Data from "../data/users_data.json"
import Select from 'react-select';
import {currentData} from "./searchbaradmin.js"
import defaultFace from "../public/images/default_face.svg"
import bannedUser from "../public/images/banned.svg"
import Image from "next/image";
import zIndex from "@mui/material/styles/zIndex";

const UserTable = ({ userData, filterDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const post = userData;
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage,setPostPerPage] = useState({value:2, label:"2/Page"});
  const options=[
  {
    value:2, 
    label:"2/Page"
  },
  {
    value:5,
    label:"5/Page"
  },
  {
    value:10,
    label:"10/Page"
  },
  {
    value:20,
    label:"20/Page"
  },
  ]
  useEffect(() => {
    axios.get(process.env.NEXT_PUBLIC_LIST).then((response) => {
      const data = response.data.identities;
      console.log(data);
      setPost(data);
    });
  }, []);

  const lastPost = number * postPerPage.value;
  const firstPost = lastPost - postPerPage.value;
  const currentPost = post.slice(firstPost, lastPost);
  var pageNumberArr = [];

  const numberOfPages=Math.ceil(post.length / postPerPage.value);
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
                        <UserPopup />
                      </td>
                    </tr>
                  </>
                );
              })}
        </tbody>
      </table>
      <div className="page_control" >
        <div className="item_count">Total {currentPost.length} items</div>
        <div className="pagination" >
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
            <button className="page_change" onClick={() => ChangePage({numberOfPages})}>
            {"Jump to Last"}
            </button>
       </div>
       <div className="dropdown">
       <Select
        defaultValue={postPerPage}
        onChange={setPostPerPage}
        options={options}
      />
       </div>
       <div className="go_to_page">
            Go To 
            <input className="page_input" type="text" onChange={(e) => ChangePage(Number(e.target.value))} />
       </div>
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
