// App.js
import React, { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import AccordTabel from "./AccordTabel";

function AccordianTabel(props) {


const getData=  JSON.parse(localStorage.getItem('commonProps'));
console.log('getData', getData);
  return (

    <div className="App">
     <AccordTabel props={getData} />
    </div>
  );
}

export default AccordianTabel;
