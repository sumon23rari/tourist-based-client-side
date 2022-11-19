import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id,name,price,description,img}=service;
    const navigate=useNavigate();
    const handleServiceDetail=(id)=>{
        navigate(`/service/${id}`)
    }
    return (
        <div  className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
            <Card.Img variant="top" src={img} style={{height:'16rem'}}/>
      <Card.Body>
        <Card.Title>
       <h2 className='text-muted'>{name}</h2>
        <h2  className='text-muted'>{price}</h2>
        </Card.Title>
        <Card.Text>
         <small>{description}</small>
        </Card.Text>
        <Button variant="success" onClick={()=>handleServiceDetail(_id)}>Get {name}</Button>
      </Card.Body>
            </div>
            
        </div>
    );
};

export default Service;