import React, { useEffect, useState } from "react";
import { fetchGetRequest } from "../api/api";
import { useSelector } from "react-redux";
import { retrieveUserDetails } from "../redux/authredux/middleware/localstorageconfig";

// Dummy data for user details

const UserDashboard = () => {
  const [affiliates, setAffiliates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const  affiliateCodeData  = retrieveUserDetails("affiliateData");

  const affiliateCode=affiliateCodeData?.affiliateCode
  const fetchAffiliates = async () => {
    try {
      setIsLoading(true);
      const response = await fetchGetRequest(
        `/api/affiliate/get-affiliate-dashboard-data?referral_code=${affiliateCode}`
      );
      console.log(response, "responce123");
      setAffiliates(response); // Assuming response is an array of affiliates
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching affiliates:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (affiliateCode) {
      fetchAffiliates(); // Fetch affiliates once affiliateCode is available
    }
  }, [affiliateCode]);
  return (
    <div className="bg-[#22252A] p-2 lg:p-6 text-white rounded-[5px]">
      <h2 className="text-lg font-semibold mb-4 text-[#F9BA1F]">
        Commission Calculation
      </h2>
      <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
        <div className="flex bg-[#32383D] p-2 md:p-6  md:py-8 gap-2 rounded-md  items-center ">
          <img
            src="https://bit.ly/dan-abramov"
            className="rounded-[50%] w-[50px] h-[50px]"
          />
          <div>
            <p>{affiliates?.data?.activeUsers}</p>
            <p className="text-[#AEAEAE] font-semibold">Active Player</p>
          </div>
        </div>
        <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center">
          <img
            src="https://bit.ly/sage-adebayo"
            className="rounded-[50%] w-[50px] h-[50px]"
          />
          <div>
            <p>{affiliates?.data?.newSignupsToday}</p>
            <p className="text-[#AEAEAE] font-semibold">New Signup</p>
          </div>
        </div>
        <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center ">
        <p className="bg-blue-500 w-[50px] h-[50px] rounded-[50%] flex items-center justify-center font-bold text-xl">TM</p>
          <div>
            <p>{affiliates?.data?.totalUsers}</p>
            <p className="text-[#AEAEAE] font-semibold">Total Member</p>
          </div>
        </div>
        <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center ">
         <p className="bg-green-500 w-[50px] h-[50px] rounded-[50%] flex items-center justify-center font-bold text-3xl">T</p>
          <div>
            <p>{affiliates?.data?.turnover||0}</p>
            <p className="text-[#AEAEAE] font-semibold">Turnover</p>
          </div>
        </div>
      </div>

      <div className="p-5 bg-[#22252A] rounded-[5px]">
        <h3 className="text-lg font-semibold mt-10 text-[#F9BA1F]">
          All Users
        </h3>
        <div className="space-y-2 mt-2 min-h-[250px]">
          {affiliates?.users?.map((user) => (
            <div
              key={user._id}
              className="flex justify-between items-center bg-[#32383D] p-2 md:p-4 rounded-lg"
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 flex items-center justify-center bg-[#FDB743] text-black font-bold rounded-full">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                {/* User Info */}
                <div className="flex flex-col">
                  <h4
                    className={`font-semibold text-sm md:text-lg ${
                      user.is_blocked ? "text-red-500" : "text-white"
                    }`}
                  >
                    {user.username}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm font-semibold">
                    Joined: {new Date(user.joined_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Amount & Country */}
              <div className="flex flex-col items-end">
                <p className="font-semibold text-sm md:text-lg text-white">
                  Amount: {user.amount} {user.currency}
                </p>
                <p className="text-gray-400 text-xs md:text-sm">
                  Country: {user.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
