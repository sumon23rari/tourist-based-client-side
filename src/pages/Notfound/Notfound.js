import React from 'react';
import sleeping from '../../images/sleeping.jpg';
const Notfound = () => {
    return (
        <div>
           <h2 className='text-center py-3'>this is notfound page <span className='text-primary'> 404</span></h2> 
           <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default Notfound;