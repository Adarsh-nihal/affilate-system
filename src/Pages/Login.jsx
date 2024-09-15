import { useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFailure, loginRequest, loginSuccess } from '../redux/authredux/action';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { saveUserDetails } from '../redux/authredux/middleware/localstorageconfig';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const naviagte = useNavigate();
  const [admiBlockStatus,setAdminBlockStatus]=useState(false)
 const st=useSelector(st=>st)
 console.log(st,'s')
  const handleLogin = async (e) => {
    console.log("sjaan")
    e.preventDefault();
    setLoading(true);
    const payload = {
      username: email.trim(),
      password: password.trim(),
    };
     console.log(payload,"m")
    dispatch(loginRequest());
    setAdminBlockStatus(false)
    try {
      // const response = await axios.post("http://localhost:8094/api/admin/admin-login", payload);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/admin/admin-login`,
        payload
      );
      if (response.data.success) {
        toast({
          title: response.data.message,
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

        dispatch(loginSuccess(response.data));

        const admindetails = {
          token: response?.data?.token,
          usernametoken: response?.data?.usernameToken,
        };

        naviagte(response.data.redirect);
        saveUserDetails("adminauth", admindetails);
        console.log(response,"during login")

        saveUserDetails("adminData",response.data)


      } else if (!response.data.success && response.data.status === "401") {
        toast({
          title: response.payload.message,
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {

        toast({
          title: response.data.message,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });

      }

      setLoading(false);
    } catch (error) {
      if(error?.response?.data?.message==="You have been blocked, contact admin." ){
        setAdminBlockStatus(true)

      }
      console.log(error?.response?.data?.message )
      console.log(error, "error");
      toast({
        title: error?.response?.data?.message || error?.data?.message,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });


      dispatch(loginFailure(error.message));
      setLoading(false);
    }
  };
 

  return (
    <div className='flex w-full   md:h-[100vh] md:items-center md:justify-center p-0 overflow-hidden'>
      <form
        onSubmit={handleLogin}
        className="lg:bg-zinc-900  h-full md:h-[80%] md:border md:border-[#FDB743] w-full p-2 md:w-[500px] md:rounded-2xl"
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
                className="block w-full outline-none px-4 py-3 mt-2 text-white bg-[#27272A] border-2 rounded-lg border-gray-700 focus:border-yellow-500  "


                name="email"
                id="email"
                type="text"
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
