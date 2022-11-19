import React from 'react';
import domestic1 from '../../images/domestics/dom1.jpg';
import domestic2 from '../../images/domestics/dom2.jpg';
import domestic3 from '../../images/domestics/dom3.jpg';
import Domestic from '../Domestic/Domestic';
const domestics=[
    {id:1,name:'Sundarban forest', img:domestic1},
    {id:2,name:'Sentmartin Sea Beach', img:domestic2},
    {id:3,name:'Shat Ghombuj Mosque', img:domestic3}
]
const Domestics = () => {
    return (
        <div id="domestics" className='container'>
            <h3 className='text-muted pt-5'>Domestics sport</h3>
          <div className="row">
            {
                domestics.map(domestic=><Domestic
                     key={domestic.id}
                     domestic={domestic}
                     ></Domestic>)
            }
            </div>  
        </div>
    );
};

export default Domestics;