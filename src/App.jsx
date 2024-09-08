import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './Pages/Dashboard'
import TopNavbar from './Component/TopNavbar'
import Sidebar from './Component/Sidebar'
import AllRoute from './Allroute/AllRoute'
import {useLocation} from "react-router-dom"
import BottomNavbar from './Component/BottomNavbar'
function App() {

  const location=useLocation()
  return (
    <div className='w-[100%] main'>
      {location.pathname!=="/"&&<TopNavbar/>}
      <div className={`flex gap-2 ${location.pathname!=="/"?"p-2  pt-[65px] md:pt-[80px]":""}  w-[100%]`}>
      {location.pathname!=="/"&& <div className='lg:contents hidden'><div className='  w-[25%]'><Sidebar/></div></div> }
       <div className={`w-[100%] ${location.pathname!=="/"?"mb-[70px] lg:mb-0":""}`}>
        <AllRoute/>
       </div>
      
      </div>
      {location.pathname!=="/"&&<div className='fixed  bottom-0 w-[100%] '>
       <BottomNavbar/>

       </div>}
      
    </div>
    
  )
}

export default App
