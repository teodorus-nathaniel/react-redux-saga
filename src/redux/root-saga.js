import { all, call } from 'redux-saga/effects';
import productSagas from './product/product-sagas';
import bookSagas from './book/book-sagas';

export default function* rootSaga (){
  yield all([ call(productSagas), call(bookSagas) ]);
}
