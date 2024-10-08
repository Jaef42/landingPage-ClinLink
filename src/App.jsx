import { useState } from 'react';
import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';

export const App = () => {
  return (
    <>
      <Router basename="/landingPage-ClinLink">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {/* <Route path="/LoginPage" element={<LoginPage />} /> */}
          {/* Añade más rutas según sea necesario */}
        </Routes>
      </Router>
      <Outlet />
    </>
  );
};

export default App;
