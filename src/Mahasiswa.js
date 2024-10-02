import React, { useState } from "react";
import "./Ruangan.css"; // Assuming you'll want separate styling for this page

function Mahasiswa() {
  // Initial student data
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", major: "Information Technology", year: 2021 },
    { id: 2, name: "Bob", major: "Computer Science", year: 2020 },
    { id: 3, name: "Charlie", major: "Software Engineering", year: 2022 },
  ]);

  const [newStudent, setNewStudent] = useState({ name: "", major: "", year: "" });
  const [editingStudent, setEditingStudent] = useState(null);

  // Handle adding new student
  const handleAddStudent = () => {
    setStudents([...students, { id: students.length + 1, ...newStudent }]);
    setNewStudent({ name: "", major: "", year: "" });
  };

  // Handle updating student
  const handleUpdateStudent = (id) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, ...newStudent } : student
    );
    setStudents(updatedStudents);
    setEditingStudent(null); // Reset editing state
    setNewStudent({ name: "", major: "", year: "" });
  };

  // Handle deleting student
  const handleDeleteStudent = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };

  // Set student data to update
  const handleEditClick = (student) => {
    setEditingStudent(student.id);
    setNewStudent(student); // Pre-fill the form with current student data
  };

  return (
    <div className="mahasiswa-container">
      <h1>Student Management</h1>

      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Prodi</th>
            <th>Tahun</th>
            <th>Opsi</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.major}</td>
              <td>{student.year}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleEditClick(student)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteStudent(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{editingStudent ? "Update Student" : "Add Student"}</h2>

        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Major"
          value={newStudent.major}
          onChange={(e) => setNewStudent({ ...newStudent, major: e.target.value })}
        />
        <input
          type="number"
          placeholder="Year"
          value={newStudent.year}
          onChange={(e) => setNewStudent({ ...newStudent, year: e.target.value })}
        />

        <button onClick={editingStudent ? () => handleUpdateStudent(editingStudent) : handleAddStudent}>
          {editingStudent ? "Update Student" : "Add Student"}
        </button>
      </div>
    </div>
  );
}

export default Mahasiswa;
