// src/redux/reducers/affiliateReducer.js
import { SET_AFFILIATE_CODE } from './actionType';

const initialState = {
  affiliateCode: '',
};

const affiliateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AFFILIATE_CODE:
      return {
        ...state,
        affiliateCode: action.payload,
      };
    default:
      return state;
  }
};

export default affiliateReducer;
