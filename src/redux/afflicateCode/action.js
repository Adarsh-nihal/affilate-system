import { SET_AFFILIATE_CODE } from './actionType';

export const setAffiliateCode = (code) => ({
  type: SET_AFFILIATE_CODE,
  payload: code,
});