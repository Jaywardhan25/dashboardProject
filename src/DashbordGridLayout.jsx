import React from "react";
import Searchbox from "./Searchbox";
import Sidebar from "./Sidebar";
import GridLayout from "./GridLayout";



function DashbordGridLayout(){
  return(
    <div className="dashbordContainer">
    <div className="sidebarContainer">
      <h1 className="sidebarContentHeading">Dashboard</h1>
    </div>
      <div className="mainContainer">
        <div className="mainSubContainer">
          <div className="mainSubContainer-Header">
            <img src="images/logo-dark.svg" alt="logo" width="179.08px" height="50px" />
            <div className="headerSearch">
            <Searchbox/>
            </div>
          </div>
          </div>
          <div className="scroll">
          <div className="mainSubContainer-Content">
          <div className="Content-Head">
          <h1>Digivalet Library</h1>
          <h5>Categories</h5>
          </div>

          <div className="Content-Icon">
          <img src="images/CATEGORIES 2.svg" alt="list"/>
        <img src="images/list 8.svg" alt="CATEGORIES2"/>


          </div>
          </div>

        <GridLayout/>
          </div>
      </div>
    </div>
  )
}
export default DashbordGridLayout;
