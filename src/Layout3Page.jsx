import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Searchbox from "./Searchbox";
import Sidebar from "./Sidebar";
import AccordianLayout from "./AccordianLayout";
import Layout3 from "./Layout3";

function Layout3Page(){
  const getData=  JSON.parse(localStorage.getItem('commonProps'));
console.log('getData', getData);
  const codeHtml = `
  <div className="Layout3-Container">

       <div className="main3-Container">
         <div className="header3-Container">
         </div>
         <div className="content3-Container">
         </div>
         <div className="footer3-Container">
         </div>
       </div>
       <div className="sidebar3-Container">
         <div className="sidebar3-content-Container">
         <div className="sidebar3-content"></div>
         <div className="sidebar3-content"></div>
         <div className="sidebar3-content"></div>
         <div className="sidebar3-content"></div>
         </div>
       </div>

     </div>
  `;

  const codeCss =`
  .Layout3-Container{
    display: flex;
    height: 100vh;
    box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.13);
  }
  .sidebar3-Container{
    background: #2666AE;
    height: 100vh;
    width: 20%;
  }
  .main3-Container{
    background: #E8EDF6;
    height: 100vh;
    width: 80%;
  }
  .header3-Container{
    height: 60px;
    background: #FFFFFF;
    width: 100%;
  }
  .content3-Container{
    background: #FFFFFF;
    height: 724px;
    margin: 23px 43px;
  }
  .footer3-Container{
    background: #FFFFFF;
    height: 50px;
    margin: 23px 43px;
  }
  .sidebar3-content-Container{
    margin-top: 100px;
  }
  .sidebar3-content{
    background: #EEEEEE;
    height: 6.56px;
    margin: 60px;
  }
  `;
  return(
    <>
    <div className="dashbordContainer1">
      <Sidebar/>
      <div className="typeWrapper">
      <div className ="types">
      <div className="typesHeader">
        <img src="images/logo-dark.svg" alt="logo" width="179.09" height="50px" />
          </div>
        <div className="typesSubHeader">
          <div className={getData.imgIconHolder}>
          <img src={getData.imgIcon} height="27px" width="27px" />
          </div>
          <h1>{getData.heading}</h1>
        </div>
      <AccordianLayout
      />
      </div>
      </div>
      <div className="description">
        <div className="searchContainer">
          <Searchbox/>
        </div>
        <div className="demo">
        <div className="demoWrapper">
        <Layout3/>
        </div>
        </div>
        <div className="code">
          <div className="Html">
          <div className="codeHeader">
          <h1>HTML</h1>
          <h1 className="matchingColour">COPY</h1>
          </div>
          <div className="codeDisplay">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeHtml}
          </SyntaxHighlighter>
          </div>
          </div>
          <div className="Css">
          <div className="codeHeader">
          <h1>CSS</h1>
          <h1 className="matchingColour">COPY</h1>
          </div>
          <div className="codeDisplay">
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeCss}
          </SyntaxHighlighter>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
export default Layout3Page
