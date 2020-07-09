import { FETCH_API, FETCH_API_FAIL, CLEAR_FETCH_STATUS } from './fetch-actions';

const INITIAL_STATE = {
  isFetching: {},
  errors: {}
};

export default function fetchReducer (state = INITIAL_STATE, action){
  switch (action.type) {
    case FETCH_API:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          [action.payload.name]: true
        },
        errors: {
          ...state.errors,
          [action.payload.name]: undefined
        }
      };
    case FETCH_API_FAIL:
      let error;
      // ambil sndri errornya biasanya di mana berdasarkan apinya

      // const errorFromPayload = action.payload.error;
      // if (errorFromPayload.message) {
      //   error = action.payload.error;
      // } else if (errorFromPayload) {
      //   error = new Error(globalErrorMessage);
      //   error.name = errorFromPayload.name;
      // } else {
      //   error = new ApplicationError(globalErrorMessage);
      // }

      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          [action.payload.name]: false
        },
        errors: {
          ...state.errors,
          [action.payload.name]: error
        }
      };
    case CLEAR_FETCH_STATUS:
      return {
        ...state,
        isFetching: {
          ...state.isFetching,
          [action.payload]: false
        },
        errors: {
          ...state.errors,
          [action.payload]: undefined
        }
      };
    default:
      return state;
  }
}
