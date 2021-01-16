import React from "react";
import {Link} from "react-router-dom";
function Back(){
  return(

    <div className="backButtonContainer">
    <Link to ="DashbordGridLayout">
    <i class="fas fa-chevron-left fa-2x"></i>
    </Link>
    </div>

  )
}
export default Back;
