// App.js
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function AccordianCustom(props) {

  const [activeId, setActiveId] = useState('0');
console.log("colors", props);
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
        background:props.activeBg,
        color: props.activeColors
      }
    } else {
      return null;
    }
  }

  return (
    <div className="App">

      <Accordion defaultActiveKey={activeId}>

        <div style={getColors(activeId, '0')}
        style={getColors(activeId, '0')} className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('0')} className="panel-toggle" variant="link" eventKey="0">
            <div className="TypesContainer">
            <div className="TypesSubContainer">
            <img className="unColor" src="images/block3.png"/>
            <img className="color" src="images/block 9.svg"/>

            <h1>{props.typesHeading1}</h1>
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
                <h1>{props.typesSubHeading1}</h1>
              </div>
              <div className="descriptionSubContent">
              <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading2}</h1>
              </div>
              <div className="descriptionSubContent">
                <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading3}</h1>
              </div>
              <div className="descriptionSubContent">
                <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading4}</h1>
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
            <h1>{props.typesHeading2}</h1>
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
                <h1>{props.typesSubHeading5}</h1>
              </div>
              <div className="descriptionSubContent">
              <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading6}</h1>
              </div>
              <div className="descriptionSubContent">
                <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading7}</h1>
              </div>
              <div className="descriptionSubContent">
                <i class="fas fa-list"></i>
                <h1>{props.typesSubHeading8}</h1>
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
            <h1>{props.typesHeading3}</h1>
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
            <h1>{props.typesHeading4}</h1>
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

    </div>
  );
}

export default AccordianCustom;
