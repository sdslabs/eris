import {React, useState} from "react";
import LeftPanel from "../../components/leftPanel";
import Searchbar from "../../components/searchbar";
import Buttons from "../../components/admin_buttons"
import Apps from "../../components/apps"
import AppBox from "../../components/appBox"
import EditAppBox from "../../components/editAppBox"
import NewAppBox from "../../components/newAppBox"
import ApplicationsPopup from "../../components/appPop"
import Sort from "../../public/images/sort.svg"
import AppAdd from "../../public/images/app_add.svg"
import Test from "../../public/images/gasper.png"
import Gasper from "../../public/images/gasper.png"
import Quizio from "../../public/images/quizio.svg"
import ApplicationList from "../../components/apps";

const AdminPage = () => {

   const appList=["Quizio", "Gasper", "Erdos", "Rootex", "Test"];
   const imgList=[Quizio, Gasper, Gasper, Gasper, Test];

   let [list, setList] = useState(appList);
   let [imgs, setImgs] = useState(imgList);

   const onSort = (sortType) => {
      let sortedList = [...list];
      let sortedImgs = [...imgs];

      if (sortType === 'asc') {
        sortedList.sort();
        sortedImgs.sort();
      } else if (sortType === 'desc') {
        sortedList.sort().reverse();
        sortedImgs.sort().reverse();
      }

      setList(sortedList);
      setImgs(sortedImgs);
    };

   function handleSort(sortType) {
      onSort(sortType);
   }

   const [appBox, setAppBox]= useState(true);
   const [editAppBox, setEditAppBox]= useState(true);

   function handleAppBox() {
      setAppBox(!appBox);
   }
   function handleEditAppBox() {
      setEditAppBox(!editAppBox);
   }

return (
<div>
    <div className="left_panel">
      <LeftPanel
         page = {"applications"}
         activity1={"inactive"}
         activity2={"active"}
         activity3={"inactive"}
         state1={"unused"}
         state2={"used"}
         state3={"unused"}/>
    </div>
    <div className="right_panel">
       <h1 className="admin_heading">Applications</h1>
    <div className="search_panel">
      <Searchbar
      text={"Search application"}/>
      <Buttons
      text1="Sort"
      text2="Add App"
      sort={handleSort}
      handleAppBox={handleAppBox}
      handleEditAppBox={handleEditAppBox}
      img1={Sort}
      img2={AppAdd}/>
    </div>
    <div className="applications">
      <div className="application_list">
         <ApplicationList 
         imgList={imgs}
         list={list}
         />
      </div>
      <div className="application_data">

         {(() => {
               if (appBox) {
                  return (
                        <AppBox
                           img={Test}
                           name="Quizio"
                           des="App1"
                           href="quizio.com/profile"
                           domains="http://localhost:5005, sdslabs.co"
                           organisations={["SDSLabs", "DSG", "PAG", "Infosec"]}
                           clkey="blabla"
                           clsecret="topsecret"
                           handleAppBox={handleAppBox}/>
                  )
               } else if (!appBox && editAppBox) {
                  return (
                     <EditAppBox
                           img={Test}
                           name="Quizio"
                           des="App1"
                           href="quizio.com/profile"
                           domains="http://localhost:5005, sdslabs.co"
                           organisations={["SDSLabs", "DSG", "PAG", "Infosec"]}
                           handleAppBox={handleAppBox}/>
                  )
               } else {
                  return (
                     <NewAppBox
                           img={Test}
                           name="Enter the name of the app"
                           des="Enter the app ID"
                           href="Enter the redirect URL of the app"
                           domains="Enter the allowed domains of the app"
                           organisations={["SDSLabs", "DSG", "PAG", "Infosec"]}
                           clkey="Enter the client key of the app"
                           clsecret="Enter the client secret of the app"
                           handleAppBox={handleAppBox}
                           handleEditAppBox={handleEditAppBox}/>
                  )
               }
               })()}

         </div>
      </div>
    </div>
</div>
  );
};

export default AdminPage;
