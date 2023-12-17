import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useGetProductById } from "../hooks/useProducts";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { productData } = useGetProductById(id);
  return (
    <Card
      key={productData.id}
      className="cart-container"
      style={{
         width: "18rem",
         border:"1px white solid"
     }}
    >
      <Card.Img
        variant="top"
        src={productData.thumbnail}
        className="cart-image"
      />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <div>{productData.price}</div>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
