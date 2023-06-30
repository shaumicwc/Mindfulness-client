import React from 'react';
import { Slide } from 'react-awesome-reveal';

const JoinUs = () => {
    return (
        <div>
            <Slide>
                <h1 className='text-5xl font-bold text-center m-10 uppercase'>Join us</h1>
            </Slide>

            <div className='text-center p-10'>
                <p className='tracking-wider font-semibold text-3xl uppercase '>
                    Ready to get started?
                </p>
                <p className='text-2xl font-light mt-5'>
                Join today and embark on a transformative journey of self-care and well-being with our exclusive offer. For a limited time, we are offering a full year of Yoga International membership at an incredible price of just $169.00/year – a remarkable 30% savings compared to our monthly membership price.

With your membership, you gain unlimited access to our extensive library of yoga classes, guided meditations, and mindfulness practices. Whether you're a beginner or an experienced practitioner, our diverse collection of content caters to all levels and interests, ensuring that there's something for everyone.

As a member, you'll enjoy the convenience of practicing yoga anytime, anywhere, with our on-demand classes. From soothing restorative flows to invigorating power sessions, our expert instructors guide you through a variety of styles and themes, allowing you to customize your practice to suit your needs and preferences.
                </p>
            </div>

        </div>
    );
};

export default JoinUs;