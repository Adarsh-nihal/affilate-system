// ContactUs.js
import React from 'react';
import contact from '../assets/contact.jpg'
import contactus from '../assets/d6.jpg'
import { useSelector } from 'react-redux';
const ContactUs = () => {
    const settingDetails=useSelector((state)=>state?.affiliateReducer?.settingData?.social_media)

    return (
        <div className=" text-white flex w-full flex-col items-center ">
            <div className="w-[100%] ">
                <img src={contactus} className='w-full h-[250px]  object-cover rounded-md' />
               
            </div>
            <div className="grid bg-[#22252A]  mt-2 rounded-[5px] w-[100%] p-2 py-4  lg:p-6 grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 ">
            <ContactCard
    icon="📱"
    title="Telegram Contact"
    description="@magicbetsaffiliate"
    buttonLabel="Contact Us"
    link={`tg://msg?text=${encodeURIComponent('@magicbetsaffiliate')}`}
  />
  
  <ContactCard
    icon="📞"
    title="WhatsApp"
    description="Contact Us"
    buttonLabel="Contact Us"
    link={`https://wa.me/${settingDetails?.whatsapp?.link ? settingDetails.whatsapp.link.replace('+', '') : ''}`}
  />
  
  <ContactCard
    icon="✉️"
    title="Email"
    buttonLabel="Email"
    link={`mailto:${settingDetails?.email?.link || 'affiliate@magicbets.in'}`}
    description="affiliate@magicbets.in"
  />
            </div>
        </div>
    );
};

const ContactCard = ({ icon, title, description, buttonLabel, link }) => {
    const handleClick = () => {
      // Open the appropriate application based on the link
      window.open(link, '_blank');
    };
  
    return (
      <div className="bg-[#32383D] w-[100%] p-2 lg:p-6 rounded-lg shadow-lg text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-sm md:text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-[#F9BA1F]">{description}</p>
        <button onClick={handleClick} className="mt-4 lg:w-[50%] text-sm font-bold text-[#22252A] bg-[#FDB743] hover:bg-[#f3b34c] py-2 px-4 rounded">
          {buttonLabel}
        </button>
      </div>
    );
  };
  
  // Modify your ContactUs Like this
 
  

export default ContactUs;
