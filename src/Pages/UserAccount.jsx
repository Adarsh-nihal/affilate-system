import React, { useState } from "react";
import { sendPostRequest } from "../api/api";
import { useToast } from "@chakra-ui/react";

const UserAccount = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirm password do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    
    const data = {
     oldPassword,
    newPassword,
    };
  
    try {
     
     
    const response=  await sendPostRequest('/api/affiliate/change-affiliate-password', data);
    console.log("res-post")
      toast({
        title: "Success",
        description: "Your password has been updated successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
       console.log(error,"err")
      toast({
        title: "Error",
        description: error.response?.data?.message || "Something went wrong.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  return (
    <div className="p-6 bg-[#22252A]  rounded-[5px] text-white">
      {/* Tabs */}
      <div className="flex border-b text-sm lg:text-[16px] border-gray-700">
        <button
          className={`flex-1 text-nowrap  py-2 ${
            activeTab === "Profile" ? "border-b-2 border-yellow-500" : ""
          }`}
          onClick={() => setActiveTab("Profile")}
        >
          Profile
        </button>
        <button
          className={`flex-1 text-nowrap  py-2 ${
            activeTab === "Change Password"
              ? "border-b-2 text-[#EAB305]"
              : ""
          }`}
          onClick={() => setActiveTab("Change Password")}
        >
          Change Password
        </button>
        <button
          className={`flex-1 text-nowrap py-2 ${
            activeTab === "Bank" ? "border-b-2 text-[#EAB305]" : ""
          }`}
          onClick={() => setActiveTab("Bank")}
        >
          Bank
        </button>
      </div>

      {/* Content Based on Active Tab */}
      <div className="mt-6  ">
        {activeTab === "Profile" && (
          <div className="flex flex-col  rounded-lg  w-[100%] gap-5">
            <div className="flex flex-col gap-4 text-sm lg:text-[16px]   p-4 lg:w-[40%]">
              <h2 className="text-lg lg:text-xl font-semibold  text-[#EAB305]">Personnel Information</h2>
              <p className="flex items-center justify-between">
                Username: <span className="font-medium">groot khan</span>
              </p>
              <p className="flex items-center justify-between">
                Status: <span className="font-medium">Active</span>
              </p>
              <p className="flex items-center justify-between">
                Registered:{" "}
                <span className="font-medium">2024-09-05 01:55:59</span>
              </p>
            </div>
            <div className="w-[100%] bg-black h-[2px]"></div>
            <div className="flex flex-col gap-4 text-sm lg:text-[16px]  p-4  lg:w-[40%]">
              <h2 className=" text-lg lg:text-xl  font-semibold text-[#EAB305]">Contact Information</h2>
              <p className="flex items-center justify-between">
                Email: <span className="font-medium">groot95@gmail.com</span>
              </p>
              <p className="flex items-center justify-between">
                Phone: <span className="font-medium">7982720940</span>
              </p>
              <p className="flex items-center justify-between">
                Whatsapp: <span className="font-medium">7982720940</span>
              </p>
              
            </div>
            <button className="my-4 w-[80%] mx-3 font-bold text-[#22252A] bg-[#FDB743] hover:bg-[#f3b34c]  py-2 px-4 rounded">
                EDIT
              </button>
          </div>
        )}

        {activeTab === "Change Password" && (
         <div>
         <div className="mt-4">
           <label className="block mb-2">Old Password</label>
           <input
             type="password"
             className="w-full p-2 bg-gray-700 rounded"
             value={oldPassword}
             onChange={(e) => setOldPassword(e.target.value)}
           />
         </div>
         <div className="mt-4">
           <label className="block mb-2">New Password</label>
           <input
             type="password"
             className="w-full p-2 bg-gray-700 rounded"
             value={newPassword}
             onChange={(e) => setNewPassword(e.target.value)}
           />
         </div>
         <div className="mt-4">
           <label className="block mb-2">Confirm Password</label>
           <input
             type="password"
             className="w-full p-2 bg-gray-700 rounded"
             value={confirmPassword}
             onChange={(e) => setConfirmPassword(e.target.value)}
           />
         </div>
         <button
           className="mt-4 bg-[#FDB743] w-[100%] hover:bg-[#f3b34c] font-bold text-[#22252A] py-2 px-4 rounded"
           onClick={handleUpdatePassword}
         >
           UPDATE PASSWORD
         </button>
       </div>
        )}

        {activeTab === "Bank" && (
           <div className="">
            <div className="mt-4 flex flex-col text-sm lg:text-[16px]  rounded-lg  w-[100%] lg:w-[40%] gap-5">
              <p className="flex items-center justify-between">
                Bank Name: <span>bankakk</span>
              </p>
              <p className="flex items-center justify-between">
                Branch: <span>jasola vihar shaheen bagh</span>
              </p>
              <p className="flex items-center justify-between">
                Account Number: <span>7565656767</span>
              </p>
              <p className="flex items-center justify-between">
                IFSC Code: <span>kkhb564909</span>
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              To change your details please contact our{" "}
              <span className="text-[#FDB743] cursor-pointer">
                Customer Support
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAccount;
