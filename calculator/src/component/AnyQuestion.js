import { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Card from 'react-bootstrap/Card';

function AnyQuestion() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false){
      event.preventDefault(); // 이전 default 값으로 변경
      event.stopPropagation(); // 전파되는 것을 멈춤
    }
    setValidated(true);
  }
  
  // Validation
  return (
    <div style={{margin: 20}}> 
    Any Question?
    <Card style={{ padding: 30 }}> 
   
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
    {/* General Form */}
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
            <Form.Control
            require type="text"
            placeholder="First name"
            defaultValue="GCU"
            />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="ACADEMY"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        <Row className="mb-3">

        {/*  hasValidation Form */}
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"x
              required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username
              </Form.Control.Feedback>
            </InputGroup>
       </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

     {/* Check box*/}
     <Form.Group className="mb-3">
      <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting"
        feedbackType="invalid"
      />
     </Form.Group>
     
     {/* Button */}
     <Button type="submit">Submit Form</Button>
    </Form>
    <br></br>
    </Card>
    </div>
  );
}

export default AnyQuestion;