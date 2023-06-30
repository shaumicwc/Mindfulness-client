import React from 'react';

const FAQ = () => {
  return (

    <div>
        <p className='text-5xl font-bold text-center uppercase'>Frequently asked question</p>
        <div className='text-blue-900 m-10'>
   <div className="flex flex-col items-center">
      <div className="w-full max-w-md">
        <div className="collapse collapse-arrow bg-lightBlue-500">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium shadow-2xl">
            What are the benefits of practicing yoga?
          </div>
          <div className="collapse-content bg-gray-200">
            <p>Practicing yoga offers numerous benefits, including improved flexibility, increased strength and balance, stress reduction, better posture, enhanced mental clarity, and overall well-being.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lightBlue-100 shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How often should I practice yoga?
          </div>
          <div className="collapse-content bg-gray-200">
            <p>The frequency of your yoga practice depends on your goals and schedule. Ideally, practicing yoga at least 2-3 times per week can provide noticeable improvements. However, even practicing once a week can yield benefits.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-lightBlue-100 shadow-2xl">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Do I need any equipment or prior experience to start yoga?
          </div>
          <div className="collapse-content bg-gray-200">
            <p>No, you don't need any equipment or prior experience to start yoga. A yoga mat is recommended for comfort, but it's not mandatory. Beginners are welcome, and classes are usually designed to accommodate different skill levels.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default FAQ;
