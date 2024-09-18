import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CountContextProvider from './context/CountContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountContextProvider>
    <App />
  </CountContextProvider>
);

