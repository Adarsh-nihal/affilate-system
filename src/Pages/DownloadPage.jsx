import React from 'react';
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d4.jpg'
import d3 from '../assets/d5.jpg'
import d4 from '../assets/d7.jpg'
import d5 from '../assets/d6.jpg'

const DownloadPage = () => {



const dummyData = [
    { id: 1,img:d5, title: 'Leaderboard', description: 'Info: 80,000,000 Prize Pool' },
    { id: 2,img:d1, title: 'Sign Up', description: 'Info: Spin & Win' },
    { id: 3,img:d3, title: 'Ak47 Teenpatti', description: 'Info: Ak47 Teenpatti' },
    { id: 4,img:d4, title: 'Number matka', description: 'Info: Number matka' },
    { id: 4,img:d2, title: 'Card Matka', description: 'Info: Number matka' },

  ];
  
  return (
    <div className=" w-[100%] flex flex-col gap-3 ">
      {dummyData.map((item) => (
        <div
          key={item.id}
          className="rounded-[5px] w-[100%]  flex flex-col md:flex-row gap-3 bg-[#22252A] min-h-[100px] p-3 shadow-md transition hover:shadow-lg"
        >
            <img src={item?.img} className=' w-full md:w-[26%] rounded-lg h-[130px]' />
            <div className='flex flex-col gap-4 items-start justify-between'>
                <div>
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-100 text-sm">{item.description}</p>
                </div>
                <button className=" w-[130px] font-bold text-[#22252A] bg-[#FDB743] hover:bg-[#f3b34c]  py-2 px-4 rounded">
                Downlaod
              </button>
          
            </div>
         
        </div>
      ))}
    </div>
  );
};


export default DownloadPage