
const API_BASE_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import { removeFromLocalStorage, retrieveUserDetails } from "../redux/authredux/middleware/localstorageconfig";

const getHeaders = () => {
  const adminauthCookie = retrieveUserDetails("adminauth");
 console.log
  if (adminauthCookie) {
    return {
      token: adminauthCookie.token,
      usernametoken: adminauthCookie.usernametoken,
    };
  }
  return {};
};

// Function to send a POST request
export const sendPostRequest = async (endpoint, data) => {
  
  console.log(`${API_BASE_URL}${endpoint}`,'url')
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      headers: getHeaders(),
    });
    console.log(response);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeFromLocalStorage("adminauth"); // Call the logout function on 401 error
      window.location.href = "/login"; // Redirect to login page on 401 error
      return;
    }
    throw error.response;
  }
};

// Function to fetch a GET request
export const fetchGetRequest = async (endpoint) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      headers: getHeaders(),
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeFromLocalStorage("adminauth"); // Call the logout function on 401 error
      window.location.href = "/login"; // Redirect to login page on 401 error
      return;
    }
    throw error;
  }
};

// Function to send a PUT request
export const sendPatchRequest = async (endpoint, data) => {
  try {
    const response = await axios.patch(`${API_BASE_URL}${endpoint}`, data, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeFromLocalStorage("adminauth"); // Call the logout function on 401 error
      window.location.href = "/login"; // Redirect to login page on 401 error
      return;
    }
    throw error;
  }
};

// Function to send a DELETE request
export const sendDeleteRequest = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`, {
      headers: getHeaders(),
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      removeFromLocalStorage("adminauth"); // Call the logout function on 401 error
      window.location.href = "/login"; // Redirect to login page on 401 error
      return;
    }
    throw error;
  }
};

