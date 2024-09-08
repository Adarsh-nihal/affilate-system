import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigate=useNavigate()
const toast=useToast()

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    toast({
      title: 'Login Successfully!',
      description: '',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
    navigate("/dashboard")
    console.log('Email:', email);
    console.log('Password:', password);

  };

  return (
    <div className='flex w-full  md:h-[100vh] md:items-center md:justify-center p-0 overflow-hidden'>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900  md:h-[80%] md:border md:border-[#FDB743] w-full p-2 md:w-[500px] h-[100vh]  md:rounded-2xl"
      >
        <div className="px-8 py-10 md:px-10">
          <h2 className="text-4xl font-extrabold text-center text-whi-800 ">
            Welcome Back!
          </h2>
          <p className="text-center text-zinc-600  mt-3">
            We missed you, sign in to continue.
          </p>
          <div className="mt-10">
            <div className="relative">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 "
                htmlFor="email"
              >
                Email
              </label>
              <input
                placeholder="adarsh@example.com"
                className="block w-full outline-none px-4 py-3 mt-2 text-zinc-800 bg-[#27272A] border-2 rounded-lg border-gray-700 focus:border-yellow-500  "


                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 "
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="••••••••"
                className="block w-full outline-none px-4 py-3 mt-2 text-zinc-800 bg-[#27272A] border-2 rounded-lg border-gray-700 focus:border-yellow-500  "
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-10">
              <button
                className="w-full px-4 py-3 duration-500 ease-in-out tracking-wide text-white transition-colors  transform bg-gradient-to-r from-[#FDB743] to-yellow-600 font-bold rounded-lg hover:bg-yellow-500 "
                type="submit"
              >
                Let's Go
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 py-4 rounded-md bg-zinc-800">
          <div className="text-sm text-[#FDB743] text-center">
            forgot your password ? Please connect with admin !
            {/* <a className="font-medium underline" href="#">
             Please connect with admin
            </a> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
