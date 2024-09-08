import React, { useState } from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const BottomNavbar = () => {

    const navigate=useNavigate()
    const [active,setActive]=useState(1)
    const data=[
        {
            id:1,
            title:"Info",
            icon:<BsFillInfoCircleFill fontSize={"25px"} />,
            route:"/dashboard"
            ,
        },
        {
            id:2,
            title:"Agent",
            icon:<FaAward fontSize={"25px"} />,
            route:"/agent-url"
        },
        {
            id:3,
            title:"Dashboard",
            icon:<MdDashboard  fontSize={"25px"}/>,
            route:"user-dashboard",
        },
        {
            id:4,
            title:"Support",
            icon:<BiSupport  fontSize={"25px"}/>,
            route:"/contact-us"
        },
        {
            id:5,
            title:"More",
            icon:<IoMenu fontSize={"25px"} />,
            route:"/more"
        },
        
    ]

    const handleNaviagte=(item)=>{
        setActive(item?.id)
        navigate(item.route)
    }
  return (
    <div className=' lg:hidden contents border '> 

    <div className='bg-[#111111] text-white flex items-center  justify-between w-[100%] p-1'>
        {data?.map((item)=>{
            return <div onClick={()=>handleNaviagte(item)} className='w-[100%] '>
                <div  className={`flex ${item?.id===active?"text-[#F9BA1F]":""} flex-col w-[100%] items-center gap-1 p-2`}>
                    <span>{item.icon}</span>
                    <p className='text-[12px]'>{item.title}</p>
    </div>
            </div>
        })}
    </div>

    </div>
  )
}

export default BottomNavbar