import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularClasses/>
            <PopularInstructors/>
        </div>
    );
};

export default Home;