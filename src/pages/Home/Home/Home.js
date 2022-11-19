import React from 'react';
import Domestics from '../../Domestics/Domestics';
import Internationals from '../../Internationals/Internationals';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Domestics></Domestics>
            <Internationals></Internationals>
            <Services></Services>
        </div>
    );
};

export default Home;