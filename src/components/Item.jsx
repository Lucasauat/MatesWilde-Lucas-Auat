import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


function Item({prod}) {
  return (
    <Card  style={{ width: '15rem', textAlign:'center'}}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text style={{ color:'grey'}}>${prod.price}.00</Card.Text>
        <Link className='btn btn-outline-primary' to={'/item/'+prod.id}>Ver Mas</Link> 
        <ItemCount/>
      </Card.Body>
    </Card>
  );
}

export default Item;