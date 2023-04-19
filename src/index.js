
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css'; /*It is important to work bootstrap*/


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {  configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './Component/CustomerContainer/User'


const store = configureStore({
  reducer:{
    user:userReducer,
    
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    

    </Provider>
  </React.StrictMode>
);

