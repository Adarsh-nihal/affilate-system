import React from 'react';
import { useSelector } from 'react-redux';

const DownloadPage = () => {
  const settingDetails = useSelector((state) => state?.affiliateReducer?.settingData);

  // Function to handle image download
  const handleDownload = (url, title) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title || 'downloaded-image'; // Set default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-[100%] flex flex-col gap-3">
      {settingDetails?.affiliate_media?.map((item) => (
        <div
          key={item.id}
          className="rounded-[5px] w-[100%] flex flex-col md:flex-row gap-3 bg-[#22252A] min-h-[100px] p-3 shadow-md transition hover:shadow-lg"
        >
          <img src={item?.url} alt={item.title} className="w-full md:w-[26%] rounded-lg h-[130px]" />
          <div className="flex flex-col gap-4 items-start justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-100 text-sm">{item.description}</p>
            </div>
            <button
              onClick={() => handleDownload(item?.url, item?.title)}
              className="w-[130px] font-bold text-[#22252A] bg-[#FDB743] hover:bg-[#f3b34c] py-2 px-4 rounded"
            >
              Download
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadPage;
