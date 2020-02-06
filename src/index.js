import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route} from "react-router-dom";
import store from './redux/store'
import App from './components/App';
import './index.css'
// import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
  <BrowserRouter basename='/sw_test_case'>
  <Provider store={store}>
    <Route component={App}/>
  </Provider>
  </BrowserRouter>, document.getElementById('root'));
