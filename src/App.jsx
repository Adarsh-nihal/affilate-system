import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import TopNavbar from './Component/TopNavbar'
import Sidebar from './Component/Sidebar'
import AllRoute from './Allroute/AllRoute'
import {useLocation} from "react-router-dom"
import BottomNavbar from './Component/BottomNavbar'
import PermissionWrapper from './Allroute/PermissionWrapper'
import { getSettingDetails, setAffiliateData, setAffiliateDetailData } from './redux/afflicateCode/action'
import { useDispatch, useSelector } from "react-redux";
import { fetchGetRequest } from './api/api'
import { saveUserDetails } from './redux/authredux/middleware/localstorageconfig'
import useFavicon from './hooks/hooks'
function App() {
  const dispatch=useDispatch()
  const location=useLocation()
  const reduxData=useSelector(state=>state)
  useFavicon();
 

  const fetchAffiliateData = async () => {
    try {
      const response = await fetchGetRequest("/api/affiliate/get-single-affiliate");
      const affiliateCode = response.data?.affiliate_code;
      const username = response.data?.username;
       dispatch(setAffiliateDetailData(response?.data))
      if (affiliateCode && username) {
        saveUserDetails('affiliateData', { affiliateCode, username })
      } else {
        console.error("Affiliate code or username is null/undefined");
      }
    } catch (error) {
      console.error("Error fetching affiliate data:", error);
    }
  };

  const getSocailData = async () => {
    try {
      const response = await fetchGetRequest("/api/setting/get-setting/6532c132ed5efb8183a66703");

      dispatch(getSettingDetails(response?.data))
    } catch (error) {
      toast({
        description: `${error?.data?.message}`,
        status: "error",
        duration: 4000,
        position: "top",
        isClosable: true,
      });
    }
  };


  useEffect(() => {
    fetchAffiliateData(); // Fetch data on load
    getSocailData()
  }, []);
  return (
    <div className='w-[100%] main'>
      {location.pathname!=="/"&&<TopNavbar/>}
      <div className={`flex gap-2 ${location.pathname!=="/"?"p-2  pt-[65px] md:pt-[90px]":""}  w-[100%]`}>
      {location.pathname!=="/"&& <div className='lg:contents hidden'><div className='  w-[25%]'><Sidebar/></div></div> }
       <div className={`w-[100%] ${location.pathname!=="/"?"mb-[70px] lg:mb-0":""}`}>
        <AllRoute/>
       </div>
      
      </div>
      {location.pathname!=="/"&&<div className='fixed  bottom-0 w-[100%] '>
       <BottomNavbar/>
       <PermissionWrapper/>
       </div>}
      
    </div>
    
  )
}

export default App
