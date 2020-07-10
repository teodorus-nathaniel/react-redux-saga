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
