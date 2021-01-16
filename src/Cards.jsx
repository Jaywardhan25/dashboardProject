import React from "react";

function Cards(props){
  return(
    <>
    <div className="cardWrap">
    <div className={`card ${props.classCustom ? props.classCustom: ""}`}>
    <div style={{background:props.imgBg,boxShadow:props.shadow}} className="imgContainer">
    <img src={props.imgsrc} width="36px"  height="36px" />
    </div>
    <div className="cardContent">
        <h1 className="cardHeading"> {props.heading}</h1>
        <h3 className="cardSubHeading"> {props.subHeading}</h3>
  </div>
    <div style={{background:props.bottomBg}} className="bottomClass">
    <div style={{background:props.bottomImgBg}} className="bottomInner">
    <img style={{marginRight: "20px",marginTop: "12px"}} src={props.arrow} alt="arrow" width="34.79px" height="23px;" />
    </div>
    </div>

    </div>
    </div>

    </>
  )
}
export default Cards;
