/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemListContainer.css";
import { Link } from "react-router-dom";

const ItemListContainer = ({ productsData }) => {
  return (
    <div className="items-list-container">
      {productsData.map((products) => {
        return (
          <Card key={products.id} className="cart-container">
            <Link to={`/item/${products.id}`}>
              <Card.Img
                variant="top"
                src={products.thumbnail}
                className="cart-image"
              />
            </Link>
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>{products.description}</Card.Text>
              <div>{products.price}</div>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
