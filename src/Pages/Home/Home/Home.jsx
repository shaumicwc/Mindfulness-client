import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import ArrivingClasses from '../ArrivingClasses/ArrivingClasses';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Experience/>
            <PopularClasses/>
            <PopularInstructors/>
            <ArrivingClasses/>
        </div>
    );
};

export default Home;