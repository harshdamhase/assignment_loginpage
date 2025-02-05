import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/dashboardpage';


function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboardpage" element={<DashboardPage />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
