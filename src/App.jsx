import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from './pages/Home';
import Logs from './pages/Logs';

// creting the routes for applicati9on
const App = () => {
  return (
    <Routes>
      {/* route for home page */}
      <Route path='/' element={<Home/>} />
      {/* route for call logs */}
      <Route path='/logs' element={<Logs/>}  />
    </Routes>
  )
}

export default App