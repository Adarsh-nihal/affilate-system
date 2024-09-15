import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
  } from "./actionType";
  
import { retrieveUserDetails,saveUserDetails } from "./middleware/localstorageconfig";

const retrieveData = retrieveUserDetails("affilate");
const adminData = retrieveUserDetails("adminData");
const initialState = {
    isLoggedIn: retrieveData?.token || "",
    user: adminData.data || {},
    usernameToken: retrieveData?.usernameToken || "",
    adminLayer: adminData?.adminLayer || [],
    error: null,
    message: "",
    isAuthenticated: adminData ? true : false,
    loading: false
  };


  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        console.log(action)
        return {
          ...state,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload.data,
          error: null
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
          error: action.payload
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: null
        };
        default :return state
    }

}
