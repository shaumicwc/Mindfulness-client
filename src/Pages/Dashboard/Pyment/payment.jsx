import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const selectedClass = useLoaderData()

    const price = selectedClass.singleClass.price;
    console.log(selectedClass.singleClass.price)
    return (
        <div className='w-3/4 mx-auto mt-10 flex items-center flex-col'>
            <Helmet>
                <title>MindFulness || Payment</title>
            </Helmet>
            <p className='text-4xl font-bold text-center mb-10'>Pay for enrol the class</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} selectedClass={selectedClass}/>
            </Elements>
        </div>
    );
};

export default Payment;