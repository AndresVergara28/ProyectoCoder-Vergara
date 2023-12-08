/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'



const ItemListContainer = ({ productsData }) => {
  return (
    <div>
      <div className='items-list-container'>
        {productsData.map((products)=>{
          return (
            <Card style={{ width: '20rem' }} key={products.id}>
            <Card.Img variant="top" src={products.thumbnail} />
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
              {products.description}
              </Card.Text>
              <div>{products.price}</div>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> 
          )
        })}
      </div>
    </div>   
  );
}

export default ItemListContainer
