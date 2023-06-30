import React from 'react';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import ArrivingClasses from '../ArrivingClasses/ArrivingClasses';
import Experience from '../Experience/Experience';
import Featured from '../Featured/Featured';
import JoinUs from '../JoinUs/JoinUs';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Experience/>
            <Featured/>
            <JoinUs/>
            <PopularClasses/>
            <PopularInstructors/>
            <ArrivingClasses/>
            <Testimonial/>
        </div>
    );
};

export default Home;