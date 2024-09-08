import { useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaCircleInfo, FaImage } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { MdDashboard } from 'react-icons/md'
import { PiLinkSimpleFill } from 'react-icons/pi'
import { FcOnlineSupport } from "react-icons/fc";
import { useNavigate } from 'react-router-dom'

const sidebarItems = [
  {
    section: 'main',
    items: [
      {id:1, href: '/dashboard', icon: <FiSearch fontSize={"25px"} />, text: 'Search Players' },
      { id:2,href: '/dashboard', icon: <FaCircleInfo fontSize={"25px"} />, text: 'Info' },
      {id:3, href: '/user-dashboard', icon:<MdDashboard fontSize={"25px"} />, text: 'Dashboard' },
      { href: 'agent-url', icon: <PiLinkSimpleFill fontSize={"25px"} />, text: 'Agent Url' }
    ]
  },
  {
    section: 'secondary',
    items: [
      {id:4, href: '/contact-us', icon: <FcOnlineSupport fontSize={"25px"} /> , text: 'Contact Us' },
      {id:5, href: '/download-images', icon: <FaImage fontSize={"25px"}/>, text: 'Download Images' }
    ]
  },
 
]

const Sidebar = () => {
  const navigate = useNavigate()
  const toast = useToast()
  const [active,setActive]=useState(1)



  const handleNavigate=(item)=>{
    setActive(item?.id)
    console.log(item,"items")
    navigate(item.href)
  }
  const handleLogout = () => {
    toast({
      title: 'Logout Successfully!',
      description: '',
      status: 'error',
      duration: 3000,
      isClosable: true,
    })
    navigate("/")
  }

  return (
    <div className='flex flex-col gap-2 w-[100%]'>
      {sidebarItems.map((section, index) => (
        <div key={index} className="lg:flex  py-6 flex-col w-[100%] bg-[#22252A] rounded-[5px] p-4">
          <nav className="space-y-6 ">
            {section.items.map((item, idx) => (
              <p onClick={()=>handleNavigate(item)}  key={idx}  className={`flex items-center cursor-pointer ${active==item?.id?"text-[#F9BA1F]":"text-gray-300"} duration-500 ease-in-out   hover:text-[#F9BA1F]`}>
                <i className={` mr-2`}>{item.icon}</i> {item.text}
              </p>
            ))}
          </nav>
         
           
        </div>
      ))}
       <div className="mt-2 space-y-6">
              <button onClick={handleLogout} className="bg-[#FDB743] w-full py-2 rounded text-black font-bold">Logout</button>
            </div>
    </div>
  )
}

export default Sidebar
