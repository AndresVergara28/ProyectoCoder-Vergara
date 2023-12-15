import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget.jsx';
import mainLogo from './TheWhiskeyHOuseLogo-WhiteLetter-NoBck.png'
import './NavBarComponent.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
       
        <Navbar.Brand href="#home"> <img src={mainLogo} alt="" style={{
          width:'12rem'
        }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Contact</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown" style={{color:"white"}}>
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
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;