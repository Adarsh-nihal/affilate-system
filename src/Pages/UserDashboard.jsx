import React from 'react';

// Dummy data for user details
const users = [
  {
    id: 1,
    logo: 'https://via.placeholder.com/40', // User logo placeholder
    name: 'John Doe',
    profitLoss: 'INR 500.00',
    joinedDate: '2023-01-15',
  },
  {
    id: 2,
    logo: 'https://via.placeholder.com/40',
    name: 'Jane Smith',
    profitLoss: 'INR -200.00',
    joinedDate: '2022-11-22',
  },
  // Add more user objects as needed
];

const UserDashboard = () => {
  return (
    <div className="bg-[#22252A] p-2 lg:p-6 text-white rounded-[5px]">
      <h2 className="text-lg font-semibold mb-4 text-[#F9BA1F]">Commission Calculation</h2>
      <div className='grid gap-2 grid-cols-1 md:grid-cols-2'>

      <div className="flex bg-[#32383D] p-2 md:p-6  md:py-8 gap-2 rounded-md  items-center ">
        <img src="https://via.placeholder.com/40" className='rounded-[50%] w-[50px] h-[50px]' />
        <div>
        <p>0.00</p>
        <p className='text-[#AEAEAE] font-semibold'>Active Player</p>
        </div>
     
      </div>
      <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center">
        <img src="https://via.placeholder.com/40" className='rounded-[50%] w-[50px] h-[50px]' />
        <div>
        <p>0.00</p>
        <p className='text-[#AEAEAE] font-semibold'>New Signup</p>
        </div>
     
      </div>
      <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center ">
        <img src="https://via.placeholder.com/40" className='rounded-[50%] w-[50px] h-[50px]' />
        <div>
        <p>0.00</p>
        <p className='text-[#AEAEAE] font-semibold'>Total Member</p>
        </div>
     
      </div>
      <div className="flex bg-[#32383D] p-2 md:p-6 md:py-8 gap-2 rounded-md  items-center ">
        <img src="https://via.placeholder.com/40" className='rounded-[50%] w-[50px] h-[50px]' />
        <div>
        <p>INR 0.00</p>
        <p className='text-[#AEAEAE] font-semibold'>Turnover</p>
        </div>
     
      </div>
      </div>

      
      <h3 className="text-lg font-semibold mt-10 text-[#F9BA1F]">All User</h3>
      <div className="space-y-2 mt-2 min-h-[250px] lg:min-h-[auto]">
        {users.map(user => (
          <div key={user.id} className="flex justify-between items-center bg-[#32383D] p-2 md:p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <img src={user.logo} alt={user.name} className="w-10 h-10 rounded-full md:mr-3" />
              <div>
                <h4 className="font-semibold">{user.name}</h4>
                <p className="text-gray-400 text-xs font-semibold md:text-lg"><span className='hidden md:contents'>Joined date:</span> {user.joinedDate}</p>
              </div>
            </div>
            <p className='text-xs font-semibold md:text-lg'>Total P/L : <span className={user.profitLoss.startsWith('INR -') ? 'text-red-500' : 'text-green-500'}>
              {user.profitLoss}
            </span> </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};


export default UserDashboard