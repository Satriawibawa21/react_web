// Home.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Home.css"; // Ensure this CSS file is created

const Home = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="card-container">
        <Link to="/app/ruangan" className="card">
          <img src="https://via.placeholder.com/150" alt="Room" />
          <h3>Ruangan</h3>
          <p>Ruangan Gedung Universitas</p>
        </Link>
        <Link to="/app/mahasiswa" className="card">
          <img src="https://via.placeholder.com/150" alt="Students" />
          <h3>Mahasiswa</h3>
          <p>Data Mahasiswa Universitas</p>
        </Link>
        <Link to="/app/dosen" className="card">
          <img src="https://via.placeholder.com/150" alt="Lecturers" />
          <h3>Dosen</h3>
          <p>Data Dosen Universitas</p>
        </Link>
        <Link to="/app/matkul" className="card">
          <img src="https://via.placeholder.com/150" alt="Subjects" />
          <h3>Matakuliah</h3>
          <p>Matakuliah Tersedia</p>
        </Link>
        <Link to="/app/jadwal" className="card">
          <img src="https://via.placeholder.com/150" alt="Schedule" />
          <h3>Jadwal</h3>
          <p>Jadwal Matakuliah</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
