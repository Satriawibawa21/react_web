import React, { useState } from "react";
import "./Ruangan.css"; // Reusing the same CSS

function Dosen() {
  // Initial lecturer data
  const [lecturers, setLecturers] = useState([
    {
      id: 1,
      name: "Dr. A",
      department: "Computer Science",
      email: "a@university.com",
    },
    {
      id: 2,
      name: "Dr. B",
      department: "Mathematics",
      email: "b@university.com",
    },
  ]);

  const [newLecturer, setNewLecturer] = useState({
    name: "",
    department: "",
    email: "",
  });
  const [editingLecturer, setEditingLecturer] = useState(null);

  // Handle adding new lecturer
  const handleAddLecturer = () => {
    setLecturers([...lecturers, { id: lecturers.length + 1, ...newLecturer }]);
    setNewLecturer({ name: "", department: "", email: "" });
  };

  // Handle updating lecturer
  const handleUpdateLecturer = (id) => {
    const updatedLecturers = lecturers.map((lecturer) =>
      lecturer.id === id ? { ...lecturer, ...newLecturer } : lecturer
    );
    setLecturers(updatedLecturers);
    setEditingLecturer(null); // Reset editing state
    setNewLecturer({ name: "", department: "", email: "" });
  };

  // Handle deleting lecturer
  const handleDeleteLecturer = (id) => {
    const filteredLecturers = lecturers.filter(
      (lecturer) => lecturer.id !== id
    );
    setLecturers(filteredLecturers);
  };

  // Set lecturer data to update
  const handleEditClick = (lecturer) => {
    setEditingLecturer(lecturer.id);
    setNewLecturer(lecturer); // Pre-fill the form with current lecturer data
  };

  return (
    <div className="about-container">
      <h1>Lecturer Management</h1>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>MataKuliah</th>
            <th>Email</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {lecturers.map((lecturer) => (
            <tr key={lecturer.id}>
              <td>{lecturer.name}</td>
              <td>{lecturer.department}</td>
              <td>{lecturer.email}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleEditClick(lecturer)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteLecturer(lecturer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{editingLecturer ? "Update Lecturer" : "Add Lecturer"}</h2>

        <input
          type="text"
          placeholder="Name"
          value={newLecturer.name}
          onChange={(e) =>
            setNewLecturer({ ...newLecturer, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Department"
          value={newLecturer.department}
          onChange={(e) =>
            setNewLecturer({ ...newLecturer, department: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newLecturer.email}
          onChange={(e) =>
            setNewLecturer({ ...newLecturer, email: e.target.value })
          }
        />

        <button
          onClick={
            editingLecturer
              ? () => handleUpdateLecturer(editingLecturer)
              : handleAddLecturer
          }
        >
          {editingLecturer ? "Update Lecturer" : "Add Lecturer"}
        </button>
      </div>
    </div>
  );
}

export default Dosen;
