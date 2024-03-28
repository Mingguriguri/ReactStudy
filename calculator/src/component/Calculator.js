import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormLabel} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React, { useState } from "react";

function Calculator() {
  // (16p) Define variables to store numbers and values using the useState hook
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const [mul, setMul] = useState(0);
  const [div, setDiv] = useState(0);
  
  // (17-18p) Define event handlers
  // about Nums
  const handleNum1Change = () => {
    setNum1(Number(document.getElementById("input1").value));
  };
  const handleNum2Change = () => {
    setNum2(Number(document.getElementById("input2").value));
  };
  // about Operators
  const addHandler = () => { setAdd(num1 + num2); };
  const subHandler = () => { setSub(num1 - num2); };
  const mulHandler = () => { setMul(num1 * num2); };
  const divHandler = () => { setDiv((num1 . num2).toFixed(2)); };



  return (
    <div class ="container" align="center">
    <br></br>
     <h1><span class ="label label-primary">GCU Calculator </span></h1> 
     <br></br>
     {/*  19 Page */}

    <br></br>
    <Container> 
       <Row>
        <Col> 
        {/*  20 Page add */}
        </Col>
        <Col> 
        {/*  20 Page sub */}
        </Col>
        <Col> 
        {/*  20 Page mul */}
        </Col>
        <Col> 
        {/*  20 Page div */}
        </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Calculator;