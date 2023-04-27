import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PetCard ({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {item.photp} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         type :{item.type}
        </Card.Text>
        <Card.Text>
         race :{item.race}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PetCard;