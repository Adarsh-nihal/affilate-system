import React, { useEffect, useState } from 'react'
import { fetchGetRequest } from '../api/api';
import { setAffiliateData } from '../redux/afflicateCode/action';
import { useDispatch } from 'react-redux';

const Transaction = () => {
    const [affiliates, setAffiliates] = useState([]);
const dispatch=useDispatch()
const totalPayoutAmount = affiliates?.payouts?.reduce((total, payout) => total + payout.amount, 0) || 0;

    const fetchAffiliates = async () => {
        try {
    
          const response = await fetchGetRequest(
            "/api/affiliate/get-single-affiliate"
          );
          const affiliateCode = response.data.affiliate_code;
          const username=response.data.username
          dispatch(setAffiliateData(affiliateCode,username));
          console.log(response, "responce123");
          setAffiliates(response.data); // Assuming response is an array of affiliates
     

          
        } catch (error) {
          console.error("Error fetching affiliates:", error);
      
        }
      };
    
      useEffect(() => {
        fetchAffiliates();
      }, []);
  return (
      <div className="text-white mt-10  lg:mt-auto">
  {/* Commission Calculation Section */}
  <div className="mb-8 mt-5 flex flex-col   w-[100%]">
    <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
      Payout Details
    </h2>
    <p className="text-lg text-gray-300 mb-4 text-center w-[100%] lg:text-left">
      Total Payout Amount:{" "}
      <strong className="text-[#F9BA1F]">{totalPayoutAmount}</strong>
    </p>

    <div className="flex flex-col gap-4">
    
      {affiliates?.payouts?.length > 0 ? (
        affiliates.payouts.map((payout, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-[#1C1F24] p-6 rounded-md shadow-lg   "
          >
            <div className="flex flex-col gap-2 mb-4 lg:mb-0">
              <span className="text-base">
                <strong>Amount:</strong>{" "}
                <span className="text-[#F9BA1F]">{payout.amount}</span>
              </span>
              <span className="text-base">
                <strong>Payment Method:</strong> {payout.payment_method}
              </span>
              <span className="text-base">
                <strong>Status:</strong>{" "}
                <span
                  className={`${
                    payout.status === "settled"
                      ? "text-green-500"
                      : "text-yellow-500"
                  }`}
                >
                  {payout.status}
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {payout.account_name && (
                <span className="text-base">
                  <strong>Account Name:</strong> {payout.account_name}
                </span>
              )}
              {payout.account_no && (
                <span className="text-base">
                  <strong>Account No:</strong> {payout.account_no}
                </span>
              )}
              {payout.ifsc_code && (
                <span className="text-base">
                  <strong>IFSC Code:</strong> {payout.ifsc_code}
                </span>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center mt-2 text-gray-400 bg-[#22252A] p-4 rounded-md border border-dashed border-gray-500">
          No payouts available
        </p>
      )}
    </div>
  </div>
</div>
   
  )
}

export default Transaction