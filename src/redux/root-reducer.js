import { combineReducers } from 'redux';
import fetchReducer from './fetch/fetch-reducer';
import productReducer from './product/product-reducer';
import bookReducer from './book/book-reducer';

const reducers = {
  fetchReducer,
  productReducer,
  bookReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
