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
  const divHandler = () => { setDiv((num1 / num2).toFixed(2)); };


  // View Part (applying React Bootstrap style)
  return (
    <div class ="container" align="center">
    <br></br>
     <h1><span class ="label label-primary">GCU Calculator </span></h1> 
     <br></br>
     {/*  input */}
     <div class="container" align="center">
      <InputGroup className="mb-3">
        <Form.Control aria-label = "First number" placeholder='First Number' 
        id = "input1" value={num1} onChange={handleNum1Change} />

        <Form.Control aria-label = "Second number" placeholder='Second Number' 
        id = "input2" value={num2} onChange={handleNum2Change} />
      </InputGroup>
     </div>
  
    <br></br>
    {/*  buttons */}
    <Container> 
       <Row>
        <Col> 
        <Button onClick={addHandler}> Add </Button> <FormLabel> {add} </FormLabel>
        </Col>
        <Col> 
        <Button onClick={subHandler}> Sub </Button> <FormLabel> {sub} </FormLabel>
        </Col>
        <Col> 
        <Button onClick={mulHandler}> Mul </Button> <FormLabel> {mul} </FormLabel>
        </Col>
        <Col> 
        <Button onClick={divHandler}> Div </Button> <FormLabel> {div} </FormLabel>
        </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Calculator;