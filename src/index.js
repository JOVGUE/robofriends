import React from 'react';//The core React view library
import ReactDOM from 'react-dom/client';//The view canvas, like ReactNative for Mobile Phones
import './index.css';//impors CSS specific to the index.js component
import reportWebVitals from './reportWebVitals';
import App from './Containers/App';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();