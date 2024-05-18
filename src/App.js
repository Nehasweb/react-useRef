import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useRef } from 'react';


function App() {

const emailRef = useRef(null);
const passwordRef = useRef(null);
const messageRef = useRef(null);

const handleSubmit = e =>
{
    e.preventDefault();
    const data = {Email : emailRef.current.value, Password : passwordRef.current.value, Message : messageRef.current.value }
    console.log(data);
}

  return (
    <div className="App">  
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Form</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Form onSubmit={handleSubmit}>
      <Form.Group ref={emailRef} className="col-md-6" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group ref={passwordRef} className="col-md-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group ref={messageRef} className="col-md-6" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>
      <Form.Group className="col-md-6" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button style={{ float: 'left' }} variant="success" type="submit">
        Submit
      </Button>
    </Form>
     
    </div>
  );
}

export default App;
