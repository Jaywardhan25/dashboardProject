import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import AccordLayout from "./AccordLayout";

function AccordianLayout(props) {


const getData=  JSON.parse(localStorage.getItem('commonProps'));
console.log('getData', getData);
  return (

    <div className="App">
     <AccordLayout props={getData} />
    </div>
  );
}

export default AccordianLayout;
