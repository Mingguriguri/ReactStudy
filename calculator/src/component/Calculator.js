import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormLabel} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React, { useState } from "react";

function Calculator() {
  // 16 Page
  
  // 17 ~ 18 Page

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