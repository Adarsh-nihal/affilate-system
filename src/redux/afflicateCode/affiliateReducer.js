// reducer.js
import { SET_AFFILIATE_DATA } from './actionType';

const initialState = {
  affiliateCode: null,
  username: null,
};

const affiliateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AFFILIATE_DATA:
      return {
        ...state,
        affiliateCode: action.payload.affiliateCode,
        username: action.payload.username,
      };
    default:
      return state;
  }
};

export default affiliateReducer;
