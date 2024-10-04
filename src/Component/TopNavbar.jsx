import React from "react";
import logo from "../assets/jeetwin.png";
import { PiLinkSimpleBold } from "react-icons/pi";
import { HiUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { retrieveUserDetails } from "../redux/authredux/middleware/localstorageconfig";
import { useSelector } from "react-redux";
const TopNavbar = () => {
  const navigate=useNavigate()
  const affilateSingleDetails=useSelector((state=>state?.affiliateReducer))
const adminData=affilateSingleDetails?.affiliateData



  return (
    <div className="w-[100%] text-white fixed top-0 bg-black p-2 lg:p-4 ">
      <div className="flex justify-between items-center w-[100%]">
        <div>
          <img onClick={()=>navigate("/dashboard")} src={logo} alt="" className="w-[80px] cursor-pointer" />
        </div>
        <div className="flex items-center gap-1 lg:gap-3">
          <div onClick={()=>navigate("/agent-url")} className="w-[40px] bg-[#22252A] h-[40px] cursor-pointer flex items-center justify-center  rounded-[50%]">
            <span  className="bg-[#FDB743] w-[30px]  h-[30px] flex items-center justify-center rounded-[50%]">
              <PiLinkSimpleBold color="black" size={"20px"} />
            </span>
          </div>
          <div className="bg-[#22252A] flex items-center cursor-pointer justify-center w-[110px] p-2 rounded-[4px] lg:rounded-md">
            <p className="text-sm font-bold">{adminData?.currency} {adminData?.amount}</p>

          </div>
          <div onClick={()=>navigate("/account")} className="w-[40px] bg-[#22252A] h-[40px] cursor-pointer flex items-center justify-center  rounded-[50%]">
            <HiUser color="white" size={"25px"}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
