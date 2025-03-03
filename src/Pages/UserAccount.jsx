import React, { useState } from "react";
import { sendPostRequest } from "../api/api";
import { Spinner, useToast } from "@chakra-ui/react";
import { removeFromLocalStorage, retrieveUserDetails } from "../redux/authredux/middleware/localstorageconfig";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const UserAccount = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [updateLoading,setUpdateLoading]=useState(false)
  const toast = useToast();
  const navigate=useNavigate()
  const handleUpdatePassword = async () => {
    // Check if any field is missing
    if (!newPassword || !confirmPassword || !oldPassword) {
      return toast({
        title: "Warning",
        description: "Please fill in all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      return toast({
        title: "Error",
        description: "New password and confirm password do not match.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  
    const data = { oldPassword, newPassword };
    setUpdateLoading(true); // Set loading state
  
    try {
      // Call the API to update password
      const response = await sendPostRequest('/api/affiliate/change-affiliate-password', data);
      console.log(response, "response");

      // Success toast
      
      if(response?.data?.status=="200"){
        toast({
          title: "success",
          description: response.data.message || "Password updated successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      removeFromLocalStorage("adminauth"); // Call the logout function on 401 error
     navigate("/login"); // Redirect to login page on 401 error

      }
      
      if(response?.response?.data?.status=="401"){
      toast({
        title: "error",
        description: response.response.data.message || "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return 
    }
    

    } catch (error) {
      console.error(error, "error");
      
      // Error toast
      toast({
        title: "Error",
        description: response?.response?.data?.message || "Something went wrong. Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setUpdateLoading(false); // Reset loading state
    }
  };
  

  const togglePasswordVisibility = (setStateFunc, currentState) => {
    setStateFunc(!currentState);
  };
const affilateSingleDetails=useSelector((state=>state?.affiliateReducer))
const adminData=affilateSingleDetails?.affiliateData
console.log(adminData,"adminData")

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
                Username: <span className="font-medium">{adminData?.username}</span>
              </p>
              <p className="flex items-center justify-between">
                Status: <span className="font-medium">{adminData?.status?"Active":"InActive"}</span>
              </p>
              <p className="flex items-center justify-between">
                Registered:{" "}
                <span className="font-medium">{adminData?.joined_at}</span>
              </p>
            </div>
            <div className="w-[100%] bg-black h-[2px]"></div>
            <div className="flex flex-col gap-4 text-sm lg:text-[16px]  p-4  lg:w-[40%]">
              <h2 className=" text-lg lg:text-xl  font-semibold text-[#EAB305]">Contact Information</h2>
              <p className="flex items-center justify-between">
                Email: <span className="font-medium">{adminData?.email}</span>
              </p>
              <p className="flex items-center justify-between">
                Phone: <span className="font-medium">{adminData?.phone}</span>
              </p>
              <p className="flex items-center justify-between">
                Whatsapp: <span className="font-medium">{adminData?.whatsapp_no||"N/A"}</span>
              </p>
              
            </div>
            <button className="my-4 w-[80%] mx-3 font-bold text-[#22252A] bg-[#FDB743] hover:bg-[#f3b34c]  py-2 px-4 rounded">
                EDIT
              </button>
          </div>
        )}

        <div>
        {activeTab === 'Change Password' && (
          <div>
            <div className="mt-4 relative">
              <label className="block mb-2">Old Password</label>
              <input
                type={showOldPassword ? 'text' : 'password'}
                className="w-full p-2 bg-gray-700 outline-none border border-yellow-500 rounded"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <div
                className="absolute top-11 right-4 cursor-pointer"
                onClick={() => togglePasswordVisibility(setShowOldPassword, showOldPassword)}
              >
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
  
            <div className="mt-4 relative">
              <label className="block mb-2">New Password</label>
              <input
                type={showNewPassword ? 'text' : 'password'}
                className="w-full p-2 bg-gray-700 outline-none border border-yellow-500   rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div
                className="absolute top-11 right-4 cursor-pointer"
                onClick={() => togglePasswordVisibility(setShowNewPassword, showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
  
            <div className="mt-4 relative">
              <label className="block mb-2">Confirm Password</label>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                className="w-full p-2 bg-gray-700 rounded outline-none border border-yellow-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                className="absolute top-11 right-4 cursor-pointer"
                onClick={() => togglePasswordVisibility(setShowConfirmPassword, showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
  
            <button
            disabled={updateLoading}
              className="mt-4 bg-[#FDB743] w-[100%] hover:bg-[#f3b34c] font-bold text-[#22252A] py-2 px-4 rounded"
              onClick={handleUpdatePassword}
            >
             {updateLoading?<Spinner/>:'UPDATE PASSWORD'}
            </button>
          </div>
        )}
      </div>
  

        {activeTab === "Bank" && (
           <div className="">
            <div className="mt-4 flex flex-col text-sm lg:text-[16px]  rounded-lg  w-[100%] lg:w-[40%] gap-5">
              <p className="flex items-center justify-between">
                Bank Name: <span>{adminData?.bank_details?.bank_name||"N/A"}</span>
              </p>
              <p className="flex items-center justify-between">
                Bank Holder  : <span>{adminData?.bank_details?.bank_holder||"N/A"}</span>
              </p>
              <p className="flex items-center justify-between">
                Account Number: <span>{adminData?.bank_details?.account_number||"N/A"}</span>
              </p>
              <p className="flex items-center justify-between">
                IFSC Code: <span>{adminData?.bank_details?.ifsc_code||"N/A"}</span>
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
