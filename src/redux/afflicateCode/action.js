// import { SET_AFFILIATE_CODE } from './actionType';

// export const setAffiliateCode = (code) => ({
//   type: SET_AFFILIATE_CODE,
//   payload: code,
// });

// actions.js
import { SET_AFFILIATE_DATA, SET_AFFILIATE_DETAIL_DATA,SET_SETTING_DATA } from './actionType';


export const setAffiliateData = (affiliateCode, username) => ({
  type: SET_AFFILIATE_DATA,
  payload: {
    affiliateCode,
    username,
  },
})

// export const setAffiliateDetailData = (affiliateDetail) => ({
//   type: SET_AFFILIATE_DETAIL_DATA,
//   payload: affiliateDetail,
// }););

export const setAffiliateDetailData = (affiliateDetail) => ({
  type: SET_AFFILIATE_DETAIL_DATA,
  payload: affiliateDetail,
})


export const getSettingDetails = (data) => ({
  type: SET_SETTING_DATA,
  payload: data,
})