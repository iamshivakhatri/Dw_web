import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./pages/navbar";
import Claims from "./pages/claims"
import React, { useState, useEffect } from 'react';

function App() {
  
  
   
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path = "/claims" element={<Claims/>}/>
        </Routes>



     
   

      </div>
    </Router>
  );
}

export default App;
