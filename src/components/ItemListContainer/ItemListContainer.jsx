/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ItemListContainer.scss";
import { Link } from "react-router-dom";

const ItemListContainer = ({ productsData }) => {
  return (
    <div className="items-list-container container">
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
            <Card.Body className="cart-body">
              <Card.Title className="cart-body-title">{products.title}</Card.Title>
              <Card.Text className="cart-body-description">{products.description}</Card.Text>
              <div>{products.price}</div>
              <Button className="cart-body-button">AÑADIR A CARRITO</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
