import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../redux/authredux/action";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import {
  retrieveUserDetails,
  saveUserDetails,
} from "../redux/authredux/middleware/localstorageconfig";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  console.log(isLoading, "load");
  const dispatch = useDispatch();
  const toast = useToast();
  const naviagte = useNavigate();
  const [admiBlockStatus, setAdminBlockStatus] = useState(false);
  const token = retrieveUserDetails("adminauth");

  console.log(token, "from login");
  const st = useSelector((st) => st);

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validation for empty fields
    if (!username.trim() || !password.trim()) {
      toast({
        title: "Please fill in both username and password.",
        status: "warning",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      return;
    }
  
    setIsLoading(true);
    const payload = {
      username: username.trim(),
      password: password.trim(),
      site_auth_key:import.meta.env.VITE_API_SITE_AUTH_KEY
    };
    console.log(payload, "m");
    dispatch(loginRequest());
    setAdminBlockStatus(false);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/affiliate/affiliate-login`,
        payload
      );
      console.log(response, "from-login-aj");
      
      if (response.data.success) {
        setIsLoading(false);
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
  
        naviagte('/dashboard');
        saveUserDetails("adminauth", admindetails);
        console.log(response, "during login");
        saveUserDetails("adminData", response.data);

        setTimeout(() => {
          window.location.reload();  // Reload the page after the toast
        }, 2100); // Adjust timing slightly longer than the toast duration
      } else if (!response.data.success && response.data.status === "401") {
        setIsLoading(false);
        toast({
          title: response.payload.message,
          status: "warning",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      } else {
        setIsLoading(false);
        toast({
          title: response.data.message,
          status: "error",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
      }
    } catch (error) {
      if (
        error?.response?.data?.message ===
        "You have been blocked, contact admin."
      ) {
        setAdminBlockStatus(true);
      }
      console.log(error?.response?.data?.message);
      console.log(error, "error");
      toast({
        title: error?.response?.data?.message || error?.data?.message,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
  
      dispatch(loginFailure(error.message));
      setIsLoading(false);
    }
  };
  

  return (
    <div className="flex w-full   md:h-[100vh] md:items-center md:justify-center p-0 overflow-hidden">
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
                htmlFor="username"
              >
                username
              </label>
              <input
                placeholder="affilate123"
                className="block w-full outline-none px-4 py-3 mt-2 text-white bg-[#27272A] border-2 rounded-lg border-gray-700 focus:border-yellow-500  "
                name="username"
                id="username"
                type="text"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="mt-6 relative ">
              <label
                className="block mb-3 text-sm font-medium text-zinc-600 "
                htmlFor="password"
              >
                Password
              </label>
              <input
                placeholder="password"
                className="block  w-full outline-none px-4 py-3 mt-2  bg-[#27272A] border-2 rounded-lg border-gray-700 focus:border-yellow-500  "
                name="password"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="absolute top-[60%] right-7"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiSolidShow /> : <BiSolidHide />}
              </span>
            </div>
            <div className="mt-10 flex justify-center">
            <button
  disabled={isLoading}
  className={`w-full px-4 py-3 duration-500 ease-in-out tracking-wide text-white transition-colors transform bg-gradient-to-r from-[#FDB743] to-yellow-600 font-bold rounded-lg hover:bg-yellow-500 ${
    isLoading ? 'cursor-not-allowed opacity-50' : ''
  }`}
  type="submit"
>
  {!isLoading ? (
    "Let's Go"
  ) : (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="sm"
    />
  )}
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
