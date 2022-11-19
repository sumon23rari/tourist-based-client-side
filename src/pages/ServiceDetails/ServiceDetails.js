import React from 'react';

import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';


const ServiceDetails = () => {
    const {serviceId}=useParams();
   
   // console.log(location);
  const [service]=useServiceDetails(serviceId)
  
    // const [name,img]=service;
    return (
        <div>
            <h3 className='mt-3 text-success'>serviceDetails id:{serviceId}</h3>
            <h3>service name:{service?.name}</h3>
            <div className="text-center mt-5">
                <h4>{service?.name}</h4>
                <img className='w-25 h-25' src={service?.img} alt="" />
                <br />
                <Link to={`/checkout/${serviceId}`}>
                    <button className="btn btn-primary mt-3">proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;