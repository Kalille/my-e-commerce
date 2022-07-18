import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import store from '../src/store'
import { UserProvider } from '../src/UserContext';
import { GameProvider } from '../src/GameContext';
import { CartProvider } from './context/CartContext';
import emailjs from '@emailjs/browser'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <GameProvider>
      <CartProvider>
  <BrowserRouter>
   <Provider store={store}>
   <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
</script>
<script type="text/javascript">
  ( function(){
      emailjs.init("YDI0u74rcgGXbO-JB")
   })();
</script>
 
  <script src="https://kit.fontawesome.com/fd5b151f10.js" crossOrigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
<link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>
 
  <App />
  </Provider>
</BrowserRouter>,
</CartProvider>
</GameProvider>
</UserProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
