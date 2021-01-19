import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Searchbox from "./Searchbox";
import Sidebar from "./Sidebar";
import AccordianLayout from "./AccordianLayout";
import Layout4 from "./Layout4";

function Layout4Page(){
  const getData=  JSON.parse(localStorage.getItem('commonProps'));
console.log('getData', getData);
  const codeHtml = `
  <div className="Layout4-Container">
        <div className="Layout4-Header">
        </div>
        <div className="Layout4-mainContent">
        <div className="Layout4-subContent"></div>
        <div className="Layout4-subContent"></div>
        </div>
        <div className="Layout4-Footer">
        </div>
      </div>
  `;

  const codeCss =`
  .Layout4-Container{
	background: #E8EDF6;
	height: 100vh;
	width: 100%;
	box-shadow: 0px 4px 27px rgba(0, 0, 0, 0.13);
}
.Layout4-Header{
	height: 60px;
	background: #FFFFFF;
	margin: 0 48px;
}
.Layout4-mainContent{
	display: flex;
	justify-content: space-around;
}
.Layout4-subContent{
	background: #FFFFFF;
	height: 695px;
	width: 45%;
	margin: 30px 0;
}
.Layout4-Footer{
	background: #2666AE;
	height: 88px;
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
        <Layout4/>
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
export default Layout4Page
