import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './SignUp.jsx'
import Dashboard from './Dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NameProvider from './context/nameContext.jsx';
import Hero from './Hero.jsx'
import "./index.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NameProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/sign up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </NameProvider>
  </React.StrictMode>,
)
