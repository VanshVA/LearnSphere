import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Authentication from './Authentication/Authentication';
import Logo from './components/Logo/Logo';
const App = () => {

  return (
    <>
      {/* <Router>
        <Routes>
          <Route element={<Homepage/>} path='/'/>
        </Routes>
      </Router>     */}
     <Logo></Logo>
    </>
  )
}

export default App