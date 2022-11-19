import React from 'react';
import { Button, Card } from 'react-bootstrap';

const International = ({international}) => {
    const {name,img}=international;
    return (
        <div  className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className='card'>
<Card.Img variant="top" src={img} style={{height:'16rem'}} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>

</Card.Body>
</div>
  </div>
    );
};

export default International;