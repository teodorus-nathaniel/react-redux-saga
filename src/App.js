import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchApi } from './redux/fetch/fetch-actions';

function App ({ 
  product,
  isFetchingProduct,
  errorProduct,
  book,
  isFetchingBook,
  errorBook
}){
  useEffect(
    () => {
      fetchProduct();
    },
    [ fetchProduct ]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {isFetchingProduct ? (
          'LOADING PRODUCT...'
        ) : (
          product.map((data) => <span key={data}>{data}</span>)
        )}
        {isFetchingBook ? (
          'LOADING BOOK...'
        ) : (
          <h1>book</h1>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.productReducer.product,
  isFetchingProduct: state.fetchReducer.isFetching.FETCH_PRODUCT,
  errorProduct: state.fetchReducer.errors.FETCH_PRODUCT,
  book: state.bookReducer.book,
  isFetchingBook: state.fetchReducer.isFetching.FETCH_BOOK,
  errorBook: state.fetchReducer.errors.FETCH_BOOK,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchApi({ name: 'FETCH_PRODUCT' })),
  fetchBook: (id) => dispatch(fetchApi({ name: 'FETCH_BOOK', data: { id } }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
