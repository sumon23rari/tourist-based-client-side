import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Orders = () => {
    const [orders,setOrders]=useState([]);
    const [user]=useAuthState(auth);
    useEffect(()=>{
        const email=user?.email;
     
         const getOrders=async()=>{
        const url=`https://fast-headland-27515.herokuapp.com/order?email=${email}`
        const {data}=await axios.get(url);
        setOrders(data);
    }
    getOrders()
    },[user])
   
    return (
        <div>
            <h1>this is orders page {orders.length}</h1>
            {
                orders.map(order=><li key={order._id} className='text-success'><span className='mx-3'>{order.email}</span> name: {order?.service}</li>)
            }
        </div>
    );
};

export default Orders;