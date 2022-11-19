import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import useServiceDetails from '../../Hooks/useServiceDetails';
import auth from '../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
const Checkout = () => {
    const {serviceId}=useParams();
    const [service]=useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    const handlePlaceOrder= event=>{
        event.preventDefault();
        const order1={
            email:user.email,
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.number.value
        }
        console.log(order1)
    //     const url=`http://localhost:7000/order`
    //    await fetch(url,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application.json'
    //         },
    //         body:JSON.stringify(order1)
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
       axios.post('http://localhost:7000/order',order1)
       .then(response=>{
        const {data}=response;
        if (data.insertedId) {
            toast("your order is booked")
        }
        event.target.reset()
       })
        
    }
   // console.log(user);
    return (
        <div className='pt-5 text-center w-50 mx-auto'>
            <h1 className='text-muted'>please order {service?.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" name="name" value={user?.displayName} placeholder='name' required /><br />
                <input className='w-100 mb-2' type="email" name="email" value={user?.email} placeholder='email' required /><br />
                <input className='w-100 mb-2' type="text" name="service" value={service?.name} placeholder='service' required /><br />
                <input className='w-100 mb-2' type="text" name="address" autocomplete="off" placeholder='address' required /><br />
                <input className='w-100 mb-2' type="number" name="number" placeholder='number' required /><br />
                <input className='w-50 ml-25 btn btn-primary' type="submit" value="place order" />

            </form>
        </div>
    );
};

export default Checkout;