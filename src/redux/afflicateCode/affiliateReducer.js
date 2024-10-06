// reducer.js
import { SET_AFFILIATE_DATA, SET_AFFILIATE_DETAIL_DATA,SET_SETTING_DATA } from './actionType';


const initialState = {
  affiliateCode: null,
  username: null,
  affiliateData:{},
  settingData:{}
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
        case SET_SETTING_DATA:
          return {
            ...state,
            settingData: action.payload,
            
          };
    default:
      return state;
  }
};

export default affiliateReducer;
