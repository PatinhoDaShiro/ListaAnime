import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login.js';
import "./reset.css"
import { Router,Route,BrowserRouter, Routes } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


