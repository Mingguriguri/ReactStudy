import { useState } from 'react';
// 23 Page

function AnyQuestion() {
  // 30 Page
  
  return (
    <div style={{margin: 20}}> 
    Any Question?
    <Card style={{ padding: 30 }}> 
   
  <Form noValidate validated={validated} onSubmit={handleSubmit}>
  // 26 Page
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
        // 27 Page
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        //    
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
     // 28 Page
    </Form>
    <br></br>
    </Card>
    </div>
  );
}

export default AnyQuestion;