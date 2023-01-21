import React from "react";
import LeftPanel from "../../components/leftPanel";

const AdminPage = ({ refs }) => {
return (
<div>
    <div className="left_panel">
    <LeftPanel 
        activity1={"active"}
        activity2={"inactive"}
        activity3={"inactive"}/>
    </div>
    <div className="right_panel">
    <h1 className=""></h1>
    </div>
</div>
  );
};

export default AdminPage;