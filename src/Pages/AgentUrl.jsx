import React from 'react';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { retrieveUserDetails } from '../redux/authredux/middleware/localstorageconfig';

const AgentUrl = () => {
  const toast = useToast();
  const affilate = retrieveUserDetails('affiliateData');
  const affiliateCode=affilate?.affiliateCode
  console.log(affiliateCode,"affiliateCode")
  const urls = [
    "https://royaldeltin.com?refer_code=",
    "https://royaldeltin.com?refer_code=",
    "https://royaldeltin.com?refer_code=",
  ];

  const handleCopy = (url) => {
    const completeUrl = affiliateCode ? `${url}${affiliateCode}` : url;

    if (!affiliateCode) {
      toast({
        title: "Affiliate Code Missing",
        description: "Unable to generate URL. Affiliate code is not available.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top"
      });
      return;
    }

    navigator.clipboard.writeText(completeUrl).then(() => {
      toast({
        title: "Copied",
        description: "URL copied to clipboard successfully!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top"
      });
    }).catch(err => {
      toast({
        title: "Copy Failed",
        description: "Failed to copy the URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top"
      });
    });
  };

  return (
    <div className="p-5 bg-[#22252A] rounded-lg shadow-lg">
      <h1 className="text-[#F9BA1F] text-lg md:text-2xl mb-4 text-center">Agent URL List</h1>
      <div className="flex flex-col gap-5">
        {urls.map((url, index) => (
          <div key={index} className="p-5 bg-[#32383D] rounded-lg shadow-md flex justify-between items-center ">
            <span className="text-white text-xs font-semibold md:text-[16px] break-all">
              {affiliateCode ? `${url}${affiliateCode}` : url}
            </span>
            <button
              onClick={() => handleCopy(url)}
              className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-5 text-black font-bold text-sm md:text-lg rounded-md hover:bg-yellow-600 "
            >
              Copy URL
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentUrl;
