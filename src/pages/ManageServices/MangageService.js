import React from 'react';
import useServices from '../../Hooks/useServices';

const MangageService = () => {
    const [services,setServices]=useServices();
    const handleDelete=id=>{
        const proced=window.confirm("are you sure deleted this item")
        if (proced) {
            const url=`http://localhost:7000/service/${id}`
            fetch(url,{
                method:'DELETE'
          })
            .then(res=>res.json())
            .then(data=>{
                const remaining=services.filter(service=>service._id !==id)
                setServices(remaining)
            })  
        }
       
    }
    return (
        <div className='mx-auto w-50'>
            <h3>this is manageServices</h3>
        {
            services.map(service=><li className='text-success d-block' key={service._id}>{service.name}
            <button onClick={()=>handleDelete(service._id)} className='btn btn-danger mx-2 mb-2'>delete</button>
            </li>)
        }
        </div>
    );
};

export default MangageService;