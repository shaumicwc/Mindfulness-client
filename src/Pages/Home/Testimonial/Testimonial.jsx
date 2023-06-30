import React from 'react';
import { Slide } from 'react-awesome-reveal';

const Testimonial = () => {
  return (

  <div>
      <Slide>
                <h1 className='text-5xl font-bold text-center m-10 uppercase'>review from our students</h1>
            </Slide>
  

    <div className=" m-10 grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="mb-4">
          <img className="w-10 h-10 rounded-full mx-auto" src="https://publicdomainvectors.org/tn_img/female-user-icon.webp" alt=""/>
          <h3 className="text-lg font-semibold text-center mt-2">Emily Thompson</h3>
          <p className="text-gray-600 text-center">Yoga Enthusiast</p>
          <div className="flex justify-center mt-1 rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600"  />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600"  />
          </div>
          <p className="text-gray-800 mt-4 p-5">
            "Practicing yoga has been a life-changing experience for me. Thanks to the wonderful instructors at XYZ Yoga Studio, I have learned to find inner peace and balance in my life. The classes are always welcoming and inclusive, and I always leave feeling refreshed and rejuvenated."
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-2xl p-6">
        <div className="mb-4">
          <img className="w-10 h-10 rounded-full mx-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfhgcaeJZpg_lS9NqX9vk2Lt5oO3_qnKzAtyzdj5b&s" alt="" />
          <h3 className="text-lg font-semibold text-center mt-2">Alex Rodriguez</h3>
          <p className="text-gray-600 text-center">Yoga Beginner</p>
          <div className="flex justify-center mt-1 rating">
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" />
            <input type="radio" name="rating-4" className="mask mask-star-2 bg-red-600" checked />
          </div>
          <p className="text-gray-800 mt-4 p-5">
            "As a beginner, I was nervous about trying yoga, but the supportive environment at XYZ Yoga Studio made me feel at ease. The instructors patiently guide me through each pose and provide valuable feedback. I've noticed significant improvements in my flexibility and overall well-being. I highly recommend XYZ Yoga Studio to anyone interested in starting their yoga journey."
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
