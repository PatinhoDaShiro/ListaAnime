import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import "./reset.css"
import { Route,BrowserRouter, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


