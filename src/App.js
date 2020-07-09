import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { fetchApi } from './redux/fetch/fetch-actions';

function App ({ isFetching, error, fetchProduct, product }){
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
        {isFetching ? (
          'LOADING...'
        ) : (
          product.map((data) => <span key={data}>{data}</span>)
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
  isFetching: state.fetchReducer.isFetching.FETCH_PRODUCT,
  error: state.fetchReducer.errors.FETCH_PRODUCT,
  product: state.productReducer.product
});

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchApi({ name: 'FETCH_PRODUCT' }))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
