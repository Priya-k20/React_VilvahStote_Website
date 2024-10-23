import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import VilvahStore from './components/VilvahStore';
function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<VilvahStore />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
       
    </div>
  );
}

export default App;
