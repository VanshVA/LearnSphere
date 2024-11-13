import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
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