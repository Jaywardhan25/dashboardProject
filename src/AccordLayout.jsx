import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

function AccordLayout(){  
        
          const [activeId, setActiveId] = useState('0');
        
          function toggleActive(id) {
            if (activeId === id) {
              setActiveId(null);
            } else {
              setActiveId(id);
            }
          }
          function getColors(activeId, id) {
            if(activeId === id) {
              return {
                background: "rgba(22, 91, 169, 0.17)",
                color: "rgba(22, 91, 169, 0.87)"
              }
            } else {
              return null;
            }
          }
    return(
        <>
       
            <Accordion defaultActiveKey={activeId}>

<div style={getColors(activeId, '0')}
style={getColors(activeId, '0')} className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
  <div className="panel-header">
    <Accordion.Toggle onClick={() => toggleActive('0')} className="panel-toggle" variant="link" eventKey="0">
    <div className="TypesContainer">
    <div className="TypesSubContainer">
    <img className="unColor" src="images/block3.png"/>
    <img className="color" src="images/block 9.svg"/>

    <h1>"Layout- A"</h1>
    </div>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-chevron-up"></i>
    </div>
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="0">
    <div className="panel-body">
    <div className="descriptionContent">
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <Link to="PageLayout">
          <h1>Layout1</h1>
          </Link>
      </div>
      <div className="descriptionSubContent">
      <i class="fas fa-list"></i>
       <Link to="Layout2Page"><h1>Layout2</h1></Link>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <Link to="Layout3Page"><h1>Layout3</h1></Link>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <Link to="Layout4Page"><h1>Layout4</h1></Link>
      </div>

    </div>
    </div>
  </Accordion.Collapse>
</div>

<div style={getColors(activeId, '1')} className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
  <div className="panel-header">
    <Accordion.Toggle onClick={() => toggleActive('1')} className="panel-toggle" variant="link" eventKey="1">
    <div className="TypesContainer">
    <div className="TypesSubContainer">
    <img className="unColor" src="images/block3.png"/>
    <img className="color" src="images/block 9.svg"/>
    <h1>Layout- B</h1>
    </div>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-chevron-up"></i>
    </div>
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="1">
    <div className="panel-body">
    <div className="descriptionContent">
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Layout5</h1>
      </div>
      <div className="descriptionSubContent">
      <i class="fas fa-list"></i>
        <h1>Layout6</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Layout7</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Layout8</h1>
      </div>

    </div>
    </div>
  </Accordion.Collapse>
</div>

<div style={getColors(activeId, '2')} className={activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'}>
  <div className="panel-header">
    <Accordion.Toggle onClick={() => toggleActive('2')} className="panel-toggle" variant="link" eventKey="2">
    <div className="TypesContainer">
    <div className="TypesSubContainer">
    <img className="unColor" src="images/block3.png"/>
    <img className="color" src="images/block 9.svg"/>
    <h1>Layout- C</h1>
    </div>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-chevron-up"></i>
    </div>
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="2">
    <div className="panel-body">
    <div className="descriptionContent">
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
      <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>

    </div>
    </div>
  </Accordion.Collapse>
</div>

<div style={getColors(activeId, '3')} className={activeId === '3' ? 'panel-wrap active-panel' : 'panel-wrap'}>
  <div className="panel-header">
    <Accordion.Toggle onClick={() => toggleActive('3')} className="panel-toggle" variant="link" eventKey="3">
    <div className="TypesContainer">
    <div className="TypesSubContainer">
    <img className="unColor" src="images/block3.png"/>
    <img className="color" src="images/block 9.svg"/>
    <h1>Layout- D</h1>
    </div>
    <i class="fas fa-chevron-down"></i>
    <i class="fas fa-chevron-up"></i>
    </div>
    </Accordion.Toggle>
  </div>

  <Accordion.Collapse eventKey="3">
    <div className="panel-body">
    <div className="descriptionContent">
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
      <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>
      <div className="descriptionSubContent">
        <i class="fas fa-list"></i>
        <h1>Dark Mode</h1>
      </div>

    </div>
    </div>
  </Accordion.Collapse>
</div>

</Accordion>

        </>
    )
}
export default AccordLayout;