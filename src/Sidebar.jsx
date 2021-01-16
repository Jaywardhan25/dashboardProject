import React from "react";
import Back from "./Back";
function Sidebar(){
  return(
    <>
    <div className="sidebarContainer">
      <Back/>
      <h1 className="sidebarContentHeading">Dashboard</h1>
    </div>
    </>
  )
}
export default Sidebar;
