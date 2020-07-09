import { combineReducers } from 'redux';
import fetchReducer from './fetch/fetch-reducer';
import productReducer from './product/product-reducer';

const reducers = {
  fetchReducer,
  productReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
