// import { SET_AFFILIATE_CODE } from './actionType';

// export const setAffiliateCode = (code) => ({
//   type: SET_AFFILIATE_CODE,
//   payload: code,
// });

// actions.js
import { SET_AFFILIATE_DATA } from './actionType';

export const setAffiliateData = (affiliateCode, username) => ({
  type: SET_AFFILIATE_DATA,
  payload: {
    affiliateCode,
    username,
  },
});
