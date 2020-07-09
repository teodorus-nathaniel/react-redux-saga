import { all, call, takeLatest, put } from 'redux-saga/effects';
import createFetchSagaPattern from '../fetch/createFetchSagaPattern';
import createFetchFunction from '../fetch/createFetchFunction';
import { loadProduct } from './product-actions';

function* fetchProductWorker (){
  // sleep 3000ms
  // API CALL
  yield new Promise((resolve) => setTimeout(resolve, 3000));

  yield put(loadProduct([ 'Prod1', 'Prod2', 'Prod3' ]));
}

function* watchFetchProduct (){
  yield takeLatest(
    createFetchSagaPattern('FETCH_PRODUCT'),
    createFetchFunction('FETCH_PRODUCT', fetchProductWorker)
  );
}

export default function* productSagas (){
  yield all([ call(watchFetchProduct) ]);
}
