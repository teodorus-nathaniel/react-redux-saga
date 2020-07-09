import { LOAD_PRODUCT } from './product-actions';

const INITIAL_STATE = {
  product: []
};

export default function productReducer (state = INITIAL_STATE, action){
  switch (action.type) {
    case LOAD_PRODUCT:
      return {
        ...state,
        product: action.payload
      };
    default:
      return state;
  }
}
