import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Searchbox from "./Searchbox";
import BasicTabel from "./BasicTabel";
import Sidebar from "./Sidebar";
import TypeList from "./TypeList";
import AccordianCustom from "./AccordianTabel";


function Test(props){
  const commonProps = {
    activeColors: "#ffAC12",
    activeColors: "#ffAC12",
    activeBg: "rgba(255, 172, 20, 0.15)",
    imgIconHolder:"tabelIconImgHolder",
    imgIcon:"images/tablet 1.svg",
    heading:"Tables",
    typesHeading1:"Basic Tabel",
    typesHeading2:"Dark Tabel",
    typesHeading3:"Light Tabel",
    typesHeading4:"Custom Tabel",
    typesSubHeading3:"Basic Tabel Type 3",
    typesSubHeading4:"Basic Tabel Type 4",
    typesSubHeading5:"Dark Tabel Type 1",
    typesSubHeading1: { dataProps : { link : "/Test", title : "Test"}},
    typesSubHeading2: { dataProps : { link : "/Test2", title : "Test2"}}
  };

  console.log("props", props);
  const codeHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <table class="BasicTabel-container">
    <thead class="thead-basic">
      <tr>
        <th>#</th>
        <th>First</th>
        <th>Last</th>
        <th>Handle</th>
      </tr>
    </thead>
    <tbody class="tbody-basic">
      <tr>
        <th>1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th>2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;

  const codeCss =`.BasicTabel-container {
    width: 100%;
    margin-bottom: 1rem;
  	color: #212529;
  }
  thead.thead-basic {
    background: #F0F0F0;
  	font-weight: 600;
  	font-size: 20px;
  	line-height: 15px;
  	letter-spacing: -0.02em;
  	color: #000000;
  }
  .thead-basic tr {
      height: 60px;
  }
  .thead-basic th {
    padding: 25px;
  }
  .tbody-basic tr{
  	border-bottom: 1px solid #E0E0E0;
  }
  .tbody-basic tr:last-child {
  	border-bottom:none;
  }
  .tbody-basic td{
  	padding: 25px;
  }
  .tbody-basic th{
  	padding: 25px;
  }`;
  return(
    <>
    <div className="dashbordContainer1">
      <Sidebar/>
      <div className="typeWrapper">
      <div className ="types">
      <div className="typesHeader">
        <img src="images/logo-dark.svg" alt="logo" width="218px" height="60px" />
          </div>
        <div className="typesSubHeader">
          <div className={props.commonProps.imgIconHolder}>
          <img src={props.commonProps.imgIcon} height="27px" width="27px" />
          </div>
          <h1>{props.commonProps.heading}</h1>
        </div>
      <AccordianCustom
      commonProps = {props.commonProps}

      />
      </div>
      </div>
      <div className="description">
        <div className="searchContainer">
          <Searchbox/>
        </div>
        <div className="demo">
        <BasicTabel/>
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
export default Test;
