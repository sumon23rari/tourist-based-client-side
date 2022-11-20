import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>  {
        const url=`https://fast-headland-27515.herokuapp.com/service`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json' 
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
        data.target.reset();
    };
  
    return (
        <div className='mx-auto w-50 mt-5'>



    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
    <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")}></textarea>
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photourl' type="text" {...register("img")}/>
                <input type="submit" value="addService"/>
    </form>
      
    
        </div>
    );
};

export default AddService;