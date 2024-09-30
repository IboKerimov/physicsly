import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Pages
import Home from "./pages/Home/Home";
// Components
import Navbar from "./components/Navbar/Navbar";
// General Css
import "./General.css"

const App = () => {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;