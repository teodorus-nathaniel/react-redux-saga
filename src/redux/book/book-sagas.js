import { all, call, takeLatest, put } from 'redux-saga/effects';
import createFetchSagaPattern from '../fetch/createFetchSagaPattern';
import createFetchFunction from '../fetch/createFetchFunction';
import { loadBook } from './book-actions';

function* fetchBookWorker(data) {
  const id = data.payload.data.id
  console.log(id)
  
  yield put(loadBook(id))
}

function* watchFetchBook() {
  yield takeLatest(
    createFetchSagaPattern('FETCH_BOOK'),
    createFetchFunction('FETCH_BOOK', fetchBookWorker)
  )
}

export default function* bookSagas() {
  yield all([ call(watchFetchBook) ])
}
