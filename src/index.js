import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './Login'; // Import your Login component
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Initial route for Login */}
        <Route path="/app/*" element={<App />} /> {/* Main application */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
