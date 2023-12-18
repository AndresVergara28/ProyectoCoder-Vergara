import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget.jsx";
import mainLogo from "./logoReact.png";
import { useGetProductsCategories } from "../../hooks/useProducts.jsx";
import "./NavBarComponent.scss";
import { Link } from "react-router-dom";

function BasicExample() {
  const { categories } = useGetProductsCategories();

  return (
    <Navbar className="navbar-container">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img
              src={mainLogo}
              alt="mainLogo"
              style={{
                width: "5rem",
              }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "white", fontSize: "var(--font-parrafo)" }}
            >
              <Link to={"./products"}>Products</Link>
            </Nav.Link>
            <NavDropdown
              title="Categories"
              id="basic-nav-dropdown"
              style={{ fontSize: "var(--font-parrafo)" }}
            >
              {categories.map((category, index) => {
                return (
                  <NavDropdown.Item
                    key={index}
                    style={{ fontSize: "var(--font-parrafo)" }}
                  >
                    <Link to={`./category/${category}`}>{category}</Link>
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
