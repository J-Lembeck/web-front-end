import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/home/Home'

import './App.css'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route exact path='/home' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
