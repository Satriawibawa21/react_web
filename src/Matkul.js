import React, { useState } from "react";
import "./Ruangan.css"; // You can reuse the same CSS

function Matkul() {
  // Initial course data
  const [courses, setCourses] = useState([
    { id: 1, name: "Mathematics", code: "MTH101", credits: 3 },
    { id: 2, name: "Computer Science", code: "CS101", credits: 4 },
  ]);

  const [newCourse, setNewCourse] = useState({
    name: "",
    code: "",
    credits: "",
  });
  const [editingCourse, setEditingCourse] = useState(null);

  // Handle adding new course
  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    setNewCourse({ name: "", code: "", credits: "" });
  };

  // Handle updating course
  const handleUpdateCourse = (id) => {
    const updatedCourses = courses.map((course) =>
      course.id === id ? { ...course, ...newCourse } : course
    );
    setCourses(updatedCourses);
    setEditingCourse(null); // Reset editing state
    setNewCourse({ name: "", code: "", credits: "" });
  };

  // Handle deleting course
  const handleDeleteCourse = (id) => {
    const filteredCourses = courses.filter((course) => course.id !== id);
    setCourses(filteredCourses);
  };

  // Set course data to update
  const handleEditClick = (course) => {
    setEditingCourse(course.id);
    setNewCourse(course); // Pre-fill the form with current course data
  };

  return (
    <div className="about-container">
      <h1>Course Management</h1>

      <table>
        <thead>
          <tr>
            <th>MataKuliah</th>
            <th>Kode</th>
            <th>SKS</th>
            <th>Opsi</th>
          </tr>   
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{course.credits}</td>
              <td>
                <button
                  className="update-btn"
                  onClick={() => handleEditClick(course)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form-container">
        <h2>{editingCourse ? "Update Course" : "Add Course"}</h2>

        <input
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Course Code"
          value={newCourse.code}
          onChange={(e) => setNewCourse({ ...newCourse, code: e.target.value })}
        />
        <input
          type="number"
          placeholder="Credits"
          value={newCourse.credits}
          onChange={(e) => setNewCourse({ ...newCourse, credits: e.target.value })}
        />

        <button
          onClick={
            editingCourse ? () => handleUpdateCourse(editingCourse) : handleAddCourse
          }
        >
          {editingCourse ? "Update Course" : "Add Course"}
        </button>
      </div>
    </div>
  );
}

export default Matkul;
