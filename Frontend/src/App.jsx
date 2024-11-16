import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'/>
        </Routes>
      </Router>    
    </>
  )
}

export default App