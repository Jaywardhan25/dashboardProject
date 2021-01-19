import React, { Component } from "react";
import PageButton from "./PageButton";

const commonProps = {
  
  activeColors: "#ffAC12",
  activeBg: "rgba(22, 91, 169, 0.87)",
  imgIconHolder:"layoutIconImgHolder",
  imgIcon:"images/alert 1.svg",
  heading:"Layout",
  typesHeading1:"Basic Tabel",
  typesHeading2:"Dark Tabel",
  typesHeading3:"Light Tabel",
  typesHeading4:"Custom Tabel",
  typesSubHeading3:"Basic Tabel Type 3",
  typesSubHeading4:"Basic Tabel Type 4",
  typesSubHeading5:"Dark Tabel Type 1"
};



class ButtonPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    localStorage.setItem('commonProps', JSON.stringify(commonProps));
  }


  render() {   
    return(
       <PageButton />    
    ) 
    
  }
}


export default ButtonPage;
