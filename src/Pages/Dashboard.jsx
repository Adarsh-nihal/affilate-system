import React, { useEffect, useState } from "react";

import affilate from "../assets/affilate.png";
import { fetchGetRequest } from "../api/api";
import { useDispatch, useSelector } from "react-redux";
import {  setAffiliateData } from "../redux/afflicateCode/action";
const Dashboard = () => {
 const dispatch = useDispatch();
 
const x=useSelector(state=>state.affilliateReducer)
console.log(x,"res")
  const [affiliates, setAffiliates] = useState([]);

  console.log(affiliates, "asas");

  const commissionData = [
    { label: "Player Win & Losses", value: "INR 1,000,000" },
    { label: "Platform Fee", value: "18%" },
    { label: "Bonus", value: "INR 20,000" },
    { label: "Net Win & Losses", value: "INR 800,000" },
    { label: "Commission Rate", value: "50%" },
    { label: "Net Commission", value: "INR 400,000" },
  ];

  const steps = [
    {
      title: "Signup",
      description: "Exclusive Account with Jeetwin",
      icon: "👤", // Add relevant icons if necessary
    },
    {
      title: "Share",
      description: "Unique links to share with friends",
      icon: "🔗",
    },
    {
      title: "Earn",
      description: "Unlimited Commission from player’s losses",
      icon: "💰",
    },
  ];

  const reviews = [
    {
      title: "Spinsvilla",
      content:
        "Working with the Jeetwin affiliates is both convenient and easy...",
      rating: 5,
    },
    {
      title: "Guide2Gambling",
      content: "We are happy to work with Jeetwin Affiliates...",
      rating: 5,
    },
    {
      title: "LuckyDice",
      content: "A completely engaging and exciting online casino experience...",
      rating: 5,
    },
  ];

  const fetchAffiliates = async () => {
    try {

      const response = await fetchGetRequest(
        "/api/affiliate/get-single-affiliate"
      );
      const affiliateCode = response.data.affiliate_code;
      const username=response.data.username
      dispatch(setAffiliateData(affiliateCode,username));
      console.log(response, "responce123");
      setAffiliates(response.data); // Assuming response is an array of affiliates
 
    } catch (error) {
      console.error("Error fetching affiliates:", error);
  
    }
  };

  useEffect(() => {
    fetchAffiliates();
  }, []);

  return (
    <div className="text-white  w-full ">
      {/* Banner */}
      <div className="w-[100%]">
        <div className="h-[180px] w-[100%]">
          <img
            src={affilate}
            alt="App"
            className="w-[100%]   h-[180px] lg:h-[280px] rounded-[5px]"
          />
        </div>

        <div className=" rounded-[5px] p-6 text-center ">
          <div className="w-[100%] lg:mt-[100px]">
            <p className="mt-4 text-2xl font-bold text-[#F9BA1F]">
              Earn {affiliates?.share_percentage || 0}% Commission
            </p>
            <p className="font-bold  mt-2 text-sm md:text-lg">
              Build your career with Jeetwin affiliate network now and start
              earning immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ">
  <div className="bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[10px] p-6 text-center shadow-lg ">
    <p className="text-[#F9BA1F] text-3xl font-bold">
      {affiliates?.affiliate_code || "N/A"}
    </p>
    <p className="text-gray-400 text-sm mt-2">Affiliate Code</p>
  </div>

  <div className="bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[10px] p-6 text-center shadow-lg ">
    <p className="text-[#F9BA1F] text-3xl font-bold">
      {affiliates?.share_percentage || 0}%
    </p>
    <p className="text-gray-400 text-sm mt-2">Commission</p>
  </div>

  <div className="bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[10px] p-6 text-center shadow-lg ">
    <p className="text-[#F9BA1F] text-3xl font-bold">Extra</p>
    <p className="text-gray-400 text-sm mt-2">Awards and Prizes</p>
  </div>

  <div className="bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[10px] p-6 text-center shadow-lg ">
    <p className="text-[#F9BA1F] text-3xl font-bold">
      {affiliates?.platform_fee || 0}%
    </p>
    <p className="text-gray-400 text-sm mt-2">Payment Fee</p>
  </div>
</div>


  

   <div className=" text-white  mt-8">
      <h1 className="text-xl mb-3">Commission Calculation</h1>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">
        <div className="flex justify-between p-4  rounded-md">
          <span>Player Win & Losses</span>
          <span>INR 1,000,000</span>
        </div>
      </div>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">

        <div className="flex justify-between p-4  rounded-md">
          <span>Platform Fee</span>
          <span>18%</span>
        </div>
      </div>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">

        <div className="flex justify-between p-4 rounded-md">
          <span>Bonus</span>
          <span>INR 20,000</span>
        </div>
      </div>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">

        <div className="flex justify-between p-4 rounded-md">
          <span>Net Win & Losses</span>
          <span>INR 800,000</span>
        </div>
      </div>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">

        <div className="flex justify-between p-4 rounded-md">
          <span>Commission Rate</span>
          <span>50%</span>
        </div>
      </div>

      <div className="mb-4 bg-gradient-to-r from-[#2D3035] to-[#22252A] rounded-[6px] p-2 ">

        <div className="flex justify-between p-4  rounded-md">
          <span>Net Commission</span>
          <span>INR 400,000</span>
        </div>
      </div>
    </div>

      <div className="my-8">
        <h3 className="text-xl font-semibold mb-4">Reviews</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#22252A] p-6 rounded-[5px]">
              <h4 className="font-semibold text-lg mb-2">{review.title}</h4>
              <p className="mb-4">{review.content}</p>
              <div className="text-[#F9BA1F]">{"⭐".repeat(review.rating)}</div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-8">
  <div className="text-center space-y-4">
    <p>About Jeetwin</p>
    <p>
      JeetWin was established in 2017... trusted gaming platform offering...
    </p>
  </div>
</footer>
    </div>
  );
};

export default Dashboard;



