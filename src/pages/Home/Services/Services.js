import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:7000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div id="services" className='container'>
            <h3 className='text-muted pt-5'>Services</h3>
            <div className="row">
            {
                services.map(service=><Service 
                    key={service._id}
                    service={service}
                    ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;