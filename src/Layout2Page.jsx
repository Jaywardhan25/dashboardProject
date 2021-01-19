import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Searchbox from "./Searchbox";
import Sidebar from "./Sidebar";
import AccordianLayout from "./AccordianLayout";
import Layout2 from "./Layout2";

function Layout2Page(){
  const getData=  JSON.parse(localStorage.getItem('commonProps'));
console.log('getData', getData);
  const codeHtml = `
  <div className="Layout2-Container">
        <div className="Layout2-Header">
        </div>
        <div className="Layout2-mainContent">
        </div>
        <div className="Layout2-Footer">
        </div>
      </div>
  `;

  const codeCss =`
  .Layout2-Container{
    background: #E8EDF6;
    height: 100vh;
    width: 100%;
    box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.13);
  }
  .Layout2-Header{
    background: #2666AE;
    height: 77px;
    width: 100%;
  }
  .Layout2-mainContent{
    height: 676px;
    background: #FFFFFF;
    margin: 35px 40px;
  }
  .Layout2-Footer{
    height: 50.02px;
    background: #FFFFFF;
    margin: 30px 0;
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
        <Layout2/>
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
export default Layout2Page
