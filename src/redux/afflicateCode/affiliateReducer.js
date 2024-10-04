// reducer.js
import { SET_AFFILIATE_DATA, SET_AFFILIATE_DETAIL_DATA } from './actionType';


const initialState = {
  affiliateCode: null,
  username: null,
  affiliateData:{}
};

const affiliateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AFFILIATE_DATA:
      return {
        ...state,
        affiliateCode: action.payload.affiliateCode,
        username: action.payload.username,
      };
      case SET_AFFILIATE_DETAIL_DATA:
        return {
          ...state,
          affiliateData: action.payload,
          
        };
    default:
      return state;
  }
};

export default affiliateReducer;
