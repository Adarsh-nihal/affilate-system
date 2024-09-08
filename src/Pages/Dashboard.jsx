import React from "react";

import affilate from '../assets/affilate.png'
const Dashboard = () => {
    const commissionData = [
        { label: 'Player Win & Losses', value: 'INR 1,000,000' },
        { label: 'Platform Fee', value: '18%' },
        { label: 'Bonus', value: 'INR 20,000' },
        { label: 'Net Win & Losses', value: 'INR 800,000' },
        { label: 'Commission Rate', value: '50%' },
        { label: 'Net Commission', value: 'INR 400,000' },
      ];
    
      const steps = [
        {
          title: 'Signup',
          description: 'Exclusive Account with Jeetwin',
          icon: '👤', // Add relevant icons if necessary
        },
        {
          title: 'Share',
          description: 'Unique links to share with friends',
          icon: '🔗',
        },
        {
          title: 'Earn',
          description: 'Unlimited Commission from player’s losses',
          icon: '💰',
        },
      ];
    
      const reviews = [
        {
          title: 'Spinsvilla',
          content: 'Working with the Jeetwin affiliates is both convenient and easy...',
          rating: 5,
        },
        {
          title: 'Guide2Gambling',
          content: 'We are happy to work with Jeetwin Affiliates...',
          rating: 5,
        },
        {
          title: 'LuckyDice',
          content: 'A completely engaging and exciting online casino experience...',
          rating: 5,
        },
      ];
    
  return (
      <div className="text-white  w-full ">
        {/* Banner */}
        <div className="w-[100%]">
         <div className="h-[180px] w-[100%]">

          <img src={affilate} alt="App" className="w-[100%]   h-[180px] lg:h-[280px] rounded-[5px]" />
         </div>

          <div className=" rounded-[5px] p-6 text-center ">
          <div className="w-[100%] lg:mt-[100px]">
            <p className="mt-4 text-2xl font-bold text-[#F9BA1F]" >Earn 50% Commission</p>
            <p className="font-bold  mt-2 text-sm md:text-lg">Build your career with Jeetwin affiliate network now and start earning immediately.</p>
          </div>
        </div>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-2  gap-2 mt-8">
          <div className="bg-[#22252A] rounded-[5px] p-4 text-center">
            <p className="text-[#F9BA1F] text-2xl">NO. 1</p>
            <p>Brand</p>
          </div>
          <div className="bg-[#22252A] rounded-[5px] p-4 text-center">
            <p className="text-[#F9BA1F] text-2xl">50%</p>
            <p>Commission</p>
          </div>
          <div className="bg-[#22252A] rounded-[5px] p-4 text-center">
            <p className="text-[#F9BA1F] text-2xl">Extra</p>
            <p>Awards and Prizes</p>
          </div>
          <div className="bg-[#22252A] rounded-[5px] p-4 text-center">
            <p className="text-[#F9BA1F] text-2xl">0%</p>
            <p>Payment Fee</p>
          </div>
        </div>

        {/* Commission calculation */}
        <div className=" text-white mt-10 lg:mt-auto ">
      {/* Commission Calculation Section */}
      <div className="mb-8 mt-5">
        <h2 className="text-xl font-semibold mb-4">Commission Calculation</h2>
        <div className=" flex flex-col gap-2 ">
          {commissionData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#22252A] p-7 rounded-[5px]"
            >
              <span>{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3-Steps Section */}
      <div className="text-center my-6">
        <h3 className="mt-4 text-2xl font-bold text-[#F9BA1F]">3-Steps to be our partner</h3>
        <p className="mb-8">Join now and earn unlimited whole life commission and prizes</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#22252A] p-6 rounded-[5px]">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#22252A] p-6 rounded-[5px]">
              <h4 className="font-semibold text-lg mb-2">{review.title}</h4>
              <p className="mb-4">{review.content}</p>
              <div className="text-[#F9BA1F]">{'⭐'.repeat(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-8">
        <div className="text-center space-y-4">
          <p>About Jeetwin</p>
          <p>
            JeetWin was established in 2017... trusted gaming platform offering...
          </p>
        </div>
      </footer>
    </div>
      </div>
  );
};

export default Dashboard;
