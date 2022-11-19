import React from 'react';
import international1 from '../../images/international/inter1.jpg';
import international2 from '../../images/international/inter2.jpg';
import international3 from '../../images/international/inter3.jpg';
import International from '../International/International';
const internationals=[
    {id:1,name:"kutub Minal",img:international1},
    {id:2,name:"Haram Sarif",img:international2},
    {id:3,name:"Bali",img:international3},
]
const Internationals = () => {
    return (
        <div id="internationals" className='container'>
            <h3 className='text-muted pt-5'>Internationals sport</h3>
          <div className="row">
            {
                internationals.map(international=><International
                key={international.id}
                international={international}
                >
               

                </International>)
            }
            </div>  
        </div>
    );
};

export default Internationals;