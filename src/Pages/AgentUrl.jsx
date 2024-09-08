import React from 'react';

const AgentUrl = () => {
  const urls = [
    "https://www.jetwin.club/en-IN/signup?cid=grood05",
    "https://www.jetwin.club/tw-IN/signup?cid=grood05",
    "https://www.jetwin.vip/en-IN/signup?cid=grood05",
  ];

  const handleCopy = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      alert("URL copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <div className="p-5 bg-[#22252A] rounded-[5px]">
      <h1 className=" text-[#F9BA1F] text-lg md:text-2xl mb-4">Agent URL List</h1>
      <div className='flex flex-col gap-3'>

      <div className="space-y-1 p-4 rounded-[5px] bg-[#32383D]">
        {urls.map((url, index) => (
          <div key={index} className="flex justify-between items-center  ">
            <span className="text-white text-xs font-semibold md:text-[16px]">{url}</span>
            <button
              onClick={() => handleCopy(url)}
               className="bg-[#FDB743] w-[140px] text-black py-2 px-4 text-sm font-bold md:text-lg rounded hover:bg-[#b99356] transition duration-200"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      <div className="space-y-1 p-4 rounded-[5px] bg-[#32383D]">
        {urls.map((url, index) => (
          <div key={index} className="flex justify-between items-center  ">
                      <span className="text-white text-xs font-semibold md:text-[16px]">{url}</span>

            <button
              onClick={() => handleCopy(url)}
               className="bg-[#FDB743] w-[140px] text-black py-2 px-4 text-sm font-bold md:text-lg rounded hover:bg-[#b99356] transition duration-200"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      <div className="space-y-1 p-4 rounded-[5px] bg-[#32383D]">
        {urls.map((url, index) => (
          <div key={index} className="flex justify-between items-center  ">
                       <span className="text-white text-xs font-semibold md:text-[16px]">{url}</span>

            <button
              onClick={() => handleCopy(url)}
              className="bg-[#FDB743] w-[140px] text-black py-2 px-4 text-sm font-bold md:text-lg rounded hover:bg-[#b99356] transition duration-200"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
      </div>

    </div>
  );
};


export default AgentUrl