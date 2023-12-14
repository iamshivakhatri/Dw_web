import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/navbar";
import Claims from "./pages/claims"
import Camera from './pages/camera';
import AboutUS from './pages/about'
import Home from './pages/home'
import React, { useState, useEffect } from 'react';
import Image from './pages/images'

function App() {
  
  
   
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path = "/claims" element={<Claims/>}/>
          <Route path = "/cameras" element={<Camera/>}/>
          <Route path = "/aboutus" element={<AboutUS/>}/>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/images" element={<Image/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
