import { clearFetchStatus, fetchApiFail } from './fetch-actions';
import { put } from 'redux-saga/effects';

export default function createFetchFunction (name, fn){
  return function* (...params){
    try {
      yield fn(...params);
      yield put(clearFetchStatus(name));
    } catch (error) {
      yield put(fetchApiFail({ name, error }));
    }
  };
}
