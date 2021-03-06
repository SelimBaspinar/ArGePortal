import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import configureStore from  './Redux/reducers/configureStore';
import {Provider} from 'react-redux';
import $ from "jquery"

const store =configureStore();



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}> <App /></Provider>
   
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
