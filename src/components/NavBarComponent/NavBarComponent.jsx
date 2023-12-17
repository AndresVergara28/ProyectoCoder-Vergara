import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget.jsx";
import mainLogo from "./TheWhiskeyHOuseLogo-WhiteLetter-NoBck.png";
import { useGetProductsCategories } from "../../hooks/useProducts.jsx";
import "./NavBarComponent.css";
import { Link } from "react-router-dom";

function BasicExample() {
  const { categories } = useGetProductsCategories();

  return (
    <Navbar expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              src={mainLogo}
              alt="mainLogo"
              style={{
                width: "8rem",
              }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{ color: "white" }}>
              <Link to={"./products"}>Products</Link>
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item key={index}>
                    <Link to={`./products/category/${category}`}>
                      {category}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default BasicExample;
