import React from 'react';

const Experience = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>Our Experience </h1>
            <div className='grid grid-cols-2 gap-5 m-10'>
                <div>
                    <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-sportive-girl-white-background_176420-5493.jpg?w=740&t=st=1688148115~exp=1688148715~hmac=4e7b33e01f5fafcc9ea6159bf65fed8afa581ef2091fa34360268adf0578d976" alt="" />
                </div>
                <div className='pl-10'>
                    <p className='text-2xl font-light mt-16'>
                        We’ve spent the last 30 years becoming an indispensable compendium of yoga practices and resources like no other. Since 1991, Yoga International has been a trusted source leading students to the best yoga classes and teachers in the world so they can experience the transformational health benefits of yoga.

                        While other platforms have shifted to pilates and fitness focused content, we’ve stayed true to yoga and our mission to help you find the path that works best for you.
                    </p>
                </div>

            </div>
            <p className='p-10 text-center font-bold text-3xl tracking-wider'>Start your journey to well-being and transformation now!</p>



        </div>
    );
};

export default Experience;