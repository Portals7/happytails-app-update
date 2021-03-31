import React from 'react'
import {Form,Button} from 'react-bootstrap';
import Container from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ContactContainer, ContactWrapper,FormContainer,ImageHolder,TextHolder} from '../pages/ContactElements';


function Contact() {
    return (
    <div className="wrapper">
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', color: 'grey' }}>
                Contact</h1>
                
      <ContactContainer>
        <ContactWrapper>
        <ImageHolder>
<TextHolder>

  </TextHolder>
</ImageHolder>
          <FormContainer>
        <Form>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
 
    <Form.Control  placeholder="Naam" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">

    <Form.Control  placeholder="Ras" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">

    <Form.Control  placeholder="Gender" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">

    <Form.Control  placeholder="Leeftijd" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">

    <Form.Control  placeholder="Locatie" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Beschrijving</Form.Label>
    <Form.Control as="textarea" rows={1} />
  </Form.Group>
  <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Foto Hond" />
  </Form.Group>
</Form>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</FormContainer>

</ContactWrapper>
 </ContactContainer>

 </div>
    )
}
export default Contact;

