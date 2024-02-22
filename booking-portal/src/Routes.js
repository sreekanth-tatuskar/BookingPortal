import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Loginpage from './loginpage';

function Appa() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/login" element={<Loginpage/>} />
      </Routes>
    </Router>
  );
}

export default Appa;
