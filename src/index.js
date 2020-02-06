import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { HashRouter, Route} from "react-router-dom";
import store from './redux/store'
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './index.css'



ReactDOM.render(
  <HashRouter basename='/'>
  <Provider store={store}>
    <Route component={App}/>
  </Provider>
  </HashRouter>, document.getElementById('root'));

serviceWorker.unregister();
