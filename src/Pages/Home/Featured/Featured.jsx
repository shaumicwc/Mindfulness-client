import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const Featured = () => {
    return (
        <div>
            <Slide>
            <h1 className='text-5xl font-bold text-center m-10'>Featured</h1>
            </Slide>
           
            <div className='grid grid-cols-2 gap-5 m-10'>

                <div>
                    <img src="https://img.freepik.com/free-photo/closeup-mudra-gesture-performed-with-young-female-fingers_1163-4092.jpg?w=740&t=st=1688155101~exp=1688155701~hmac=3127166d3e726880625d4a26477750557f89ddc6fbf35bfa1a3974aab9ba2587" alt="" />
                </div>

                <div className='text-center p-10'>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className='tracking-wider font-semibold text-3xl '>
                        DIG DEEPER WITH MEMBER COURSES
                    </p>

                    <p className='text-2xl font-light'>
                        Learn everything from yoga history and philosophy to yoga therapy with our online yoga courses. Uplevel your training with our exclusive courses, which are eligible for continuing education credits with Yoga Alliance.
                    </p>
                    </Fade>
                </div>

            </div>
            {/* -----------------------2nd sub section----------- */}

            <div className='grid grid-cols-2 gap-5'>

                <div className='text-center p-10'>
                <Fade delay={1e3} cascade damping={1e-1}>
                    <p className='tracking-wider font-semibold text-3xl uppercase '>
                        Discover New Challenges
                    </p>
                    <p className='text-2xl font-light'>
                        In the practice of yoga, we tap into the timeless wisdom of ancient sages and philosophers. We explore concepts such as non-attachment, self-acceptance, and compassion, weaving these teachings into the fabric of our lives. Yoga becomes a transformable journey of self-realization, as we peel away the layers of conditioning and connect with our authentic selves.

                        Join us on this incredible odyssey of self-discovery, where movement and stillness intertwine, and the practice of yoga becomes a powerful catalyst for personal growth. 
                    </p>
                    </Fade>
                </div>

                <div>
                    <img className='mt-10' src="https://img.freepik.com/free-photo/young-blonde-woman-sportswear-is-meditating-yoga-mat-with-closed-eyes_1268-17236.jpg?w=826&t=st=1688155845~exp=1688156445~hmac=3ea731dd0831878da0fe52b191e5e5ecf48ba10fd0f93279cf8dd7173356be45" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Featured;