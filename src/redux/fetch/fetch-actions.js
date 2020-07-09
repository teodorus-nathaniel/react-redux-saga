export const FETCH_API = 'FETCH_API';
export const FETCH_API_FAIL = 'FETCH_API_FAIL';
export const CLEAR_FETCH_STATUS = 'CLEAR_FETCH_STATUS';

export const fetchApi = (payload) => ({
  type: FETCH_API,
  payload
});
export const fetchApiFail = (payload) => ({
  type: FETCH_API_FAIL,
  payload
});
export const clearFetchStatus = (payload) => ({
  type: CLEAR_FETCH_STATUS,
  payload
});
