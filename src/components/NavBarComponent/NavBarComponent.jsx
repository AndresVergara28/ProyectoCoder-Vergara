import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget.jsx';
import mainLogo from './TheWhiskeyHOuseLogo-WhiteLetter-NoBck.png'
import './NavBarComponent.css'


function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
       
        <Navbar.Brand href="/"> <img src={mainLogo} alt="mainLogo" style={{
          width:'8rem'
        }}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="./products" style={{color:"white"}}>Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;