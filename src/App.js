import React from "react";
import { Route, Link, Routes } from "react-router-dom"; // Removed Router import
import Home from "./Home";
import Mahasiswa from "./Mahasiswa";
import Ruangan from "./Ruangan";
import Dosen from "./Dosen";
import Matkul from "./Matkul";
import Jadwal from "./Jadwal";
import Login from "./Login"; // Assuming you have a Login component
import "./App.css";

function App() {
  return (
    <div className="App home-container">
      {" "}
      {/* Added class for flexbox */}
      <header className="App-header">
        <h1>Universitas</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/app/Home">Home</Link>
          </li>
          <li>
            <Link to="/app/ruangan">Ruangan</Link>
          </li>
          <li>
            <Link to="/app/mahasiswa">Mahasiswa</Link>
          </li>
          <li>
            <Link to="/app/dosen">Dosen</Link>
          </li>
          <li>
            <Link to="/app/matkul">Matakuliah</Link>
          </li>
          <li>
            <Link to="/app/jadwal">Jadwal</Link>
          </li>
        </ul>
      </nav>
      <main className="App-main">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ruangan" element={<Ruangan />} />
          <Route path="/mahasiswa" element={<Mahasiswa />} />
          <Route path="/dosen" element={<Dosen />} />
          <Route path="/matkul" element={<Matkul />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/" element={<Login />} />{" "}
          {/* Redirect to Login by default */}
        </Routes>
      </main>
      <footer className="home-footer">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <div className="social-icons">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
