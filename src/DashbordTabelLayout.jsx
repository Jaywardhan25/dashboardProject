import React from "react";
import Searchbox from "./Searchbox";
import Sidebar from "./Sidebar";
import TabelLayout from "./TabelLayout";
import {Link} from "react-router-dom";


function DashbordTabelLayout(){
  return(
    <div className="dashbordContainer">
    <div className="sidebarContainer">
      <h1 className="sidebarContentHeading">Dashboard</h1>
    </div>
      <div className="mainContainer">
        <div className="mainSubContainer">
          <div className="mainSubContainer-Header">
            <img src="images/logo-dark.svg" alt="logo" width="218px" height="60px" />
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
          <Link to ="DashbordGridLayout"><img src="images/list 9.svg" alt="list"/></Link>
          <Link to ="DashbordTabelLayout"><img src="images/list 5.svg" alt="CATEGORIES2"/></Link>


          </div>
          </div>

        <TabelLayout/>
          </div>
          </div>
    </div>
  )
}
export default DashbordTabelLayout;
