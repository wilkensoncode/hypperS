import React from 'react';
import { Provider } from 'react-redux';
import Store from './redux/Store'; 
import ReactDOM from 'react-dom';
import './styles/bootstrap.min.css'
import "./styles/index.css";
import App from './App'; 
 
ReactDOM.render(  
    <Provider store={Store}>
      <App />
    </Provider>,  
  document.getElementById("root")
);
 
