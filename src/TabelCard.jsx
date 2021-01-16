import React from "react";

function TabelCard(props){
  return(
    <>
    <div className="tabelCard-Container">
    <div className="tabelWrapper">
    <div className={props.imgHolder}>
    <img src={props.src} width="40px" height="40px" />
    </div>
    <div className="txtHolder">
    <h1>{props.description}</h1>
    <h5>{props.subDescription}</h5>
    </div>
    </div>
    <div className={props.clickHolder}>
    <img src={props.arrowSrc}/>
    </div>
    </div>
    </>
  )
}
export default TabelCard;
